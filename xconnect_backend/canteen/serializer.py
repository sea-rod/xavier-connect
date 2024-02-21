from rest_framework import serializers
from rest_framework.exceptions import ValidationError
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
        if menu.avail_quantity < validated_data["quantity"]:
            raise ValidationError({"Quantity": "This Item is over"})
        validated_data["price"] = menu.price * validated_data["quantity"]
        menu.avail_quantity -= validated_data["quantity"]
        menu.save()
        print("hehe2")
        items = Items.objects.create(**validated_data)
        return items

    def save(self, **kwargs):
        print("ll")
        return super().save(**kwargs)


class CartSerializer(serializers.ModelSerializer):
    menu_items = ItemSerializer(source="items_set", many=True, read_only=True)

    class Meta:
        model = Cart
        fields = ("id", "status", "total", "menu_items")
