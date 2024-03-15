from rest_framework import serializers
from .models import Menu, Items, Cart


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
            items = Items.objects.get(cart_id=cart_id, menu_id=menu.pk)
            items.price = validated_data["price"]
            items.quantity = validated_data["quantity"]
            items.save()
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
