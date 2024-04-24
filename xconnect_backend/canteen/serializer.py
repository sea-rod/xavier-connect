from django.db import transaction
from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from .models import Menu, Items, Cart, Order


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
    cart_id = CartSerializer()
    class Meta:
        model = Order
        fields = ("id","user_id", "cart_id", "status")
        extra_kwargs = {"cart_id": {"read_only": True}, "user_id": {"read_only": True}}

    def create(self, validated_data):
        try:
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
                    menu = item.menu_id
                    if menu.avail_quantity >= item.quantity:
                        menu.avail_quantity -= item.quantity
                        in_stock.add(menu)
                    else:
                        in_stock.clear()
                        raise ValidationError(f"{menu.item_name} is out of stock")
                for menu in in_stock:
                    menu.save()
                cart.user_id = None
                cart.save()
                Cart.objects.create(user_id=validated_data["user_id"])
                return "Checkout successful"
        except Cart.DoesNotExist as e:
            raise ValidationError("Cart does not exist", e)
