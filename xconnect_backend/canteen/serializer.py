from django.db import transaction
from rest_framework import serializers
from rest_framework.exceptions import ValidationError
import razorpay
from django.conf import settings
from .models import Menu, Items, Cart, Order, Payment


class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = ("id", "item_name", "price", "image", "avail_quantity", "status")


class ItemSerializer(serializers.ModelSerializer):
    menu = MenuSerializer(source="menu_id", read_only=True)

    class Meta:
        model = Items
        fields = ("id", "menu_id", "quantity", "menu")
        extra_kwargs = {"menu_id": {"write_only": True}, "quantity": {"required": True}}

    def create(self, validated_data):
        menu = Menu.objects.get(id=validated_data.get("menu_id").id)
        validated_data["price"] = menu.price * validated_data["quantity"]
        cart_id = validated_data["cart_id"]
        try:
            with transaction.atomic():
                items = Items.objects.get(cart_id=cart_id, menu_id=menu.pk)
                items.price = validated_data["price"]
                if menu.avail_quantity >= validated_data["quantity"]:
                    items.quantity = validated_data["quantity"]
                    items.save()
                else:
                    raise ValidationError("Out of Stock")
        except Items.DoesNotExist as error:
            items = Items.objects.create(**validated_data)
        return items

    def save(self, **kwargs):
        return super().save(**kwargs)


class CartSerializer(serializers.ModelSerializer):
    menu_items = ItemSerializer(source="items_set", many=True, read_only=True)

    class Meta:
        model = Cart
        fields = ("id", "status", "total", "menu_items")


class OrderSerializer(serializers.ModelSerializer):
    cart_id = CartSerializer(read_only=True)

    class Meta:
        model = Order
        fields = (
            "id",
            "user_id",
            "cart_id",
            "status",
        )
        extra_kwargs = {"cart_id": {"read_only": True}, "user_id": {"read_only": True}}

    def create(self, validated_data):
        try:
            print(validated_data["user_id"])
            with transaction.atomic():
                cart = Cart.objects.select_for_update().get(
                    user_id=validated_data["user_id"]
                )
                validated_data["cart_id"] = cart
                items = Items.objects.filter(cart_id=cart)
                if not items:
                    raise ValidationError("Cart is Empty")
                in_stock = set()
                for item in items:
                    menu = Menu.objects.select_for_update().get(pk=item.menu_id.id)
                    if menu.avail_quantity >= item.quantity:
                        menu.avail_quantity -= item.quantity
                        in_stock.add(menu)
                    else:
                        in_stock.clear()
                        raise ValidationError(f"{menu.item_name} is out of stock")
                for menu in in_stock:
                    menu.save()
                order = Order.objects.create(**validated_data)
                return order
        except Cart.DoesNotExist as e:
            raise ValidationError("Cart does not exist", e)


class PaymentClientSerializer(serializers.Serializer):
    razorpay_order_id = serializers.CharField()
    razorpay_merchant_key = serializers.CharField()
    razorpay_amount = serializers.DecimalField(max_digits=20, decimal_places=2)
    currency = serializers.CharField()


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ("order", "pay_order_id", "payment_id", "signature")
        extra_kwargs = {"order": {"read_only": True}}

    def create(self, validated_data):
        try:
            print(validated_data)
            razorpay_client = razorpay.Client(
                auth=(settings.RAZOR_KEY_ID, settings.RAZOR_KEY_SECRET)
            )
            params_dict = {
                "razorpay_order_id": validated_data.get("pay_order_id"),
                "razorpay_payment_id": validated_data.get("payment_id"),
                "razorpay_signature": validated_data.get("signature"),
            }

            print(params_dict)
            result = razorpay_client.utility.verify_payment_signature(params_dict)
            print(validated_data["order"])
            if result is not None:
                with transaction.atomic():

                    Payment.objects.create(
                        **validated_data,
                    )
                    cart_id = validated_data["order"].cart_id
                    user_id = cart_id.user_id
                    cart_id.user_id = None
                    cart_id.save()
                    Cart.objects.create(user_id=user_id)
        except Exception as e:
            print(e)
            raise ValidationError(str(e))
        return "payment sucessful"
