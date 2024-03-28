from django.db import models
from django.contrib.auth import get_user_model


STATUS_CHOICE = (
    ("preparing", "Preparing"),
    ("ready", "Ready"),
    ("picked up", "Picked Up"),
)


class Menu(models.Model):
    item_name = models.CharField(max_length=255)
    price = models.FloatField()
    image = models.ImageField(default="default/default.jpg", upload_to="media/canteen")
    avail_quantity = models.IntegerField(default=0)
    status = models.BooleanField(default=False)

    def __str__(self):
        return self.item_name


class Cart(models.Model):
    user_id = models.OneToOneField(
        get_user_model(), on_delete=models.CASCADE, null=True
    )
    status = models.BooleanField(default=False)
    total = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    menu_id = models.ManyToManyField(Menu, through="Items")


class Items(models.Model):
    cart_id = models.ForeignKey(Cart, on_delete=models.CASCADE)
    menu_id = models.ForeignKey(Menu, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0)


class Order(models.Model):
    user_id = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    cart_id = models.ForeignKey(Cart, on_delete=models.CASCADE)
    status = models.CharField(max_length=15, choices=STATUS_CHOICE, default="preparing")
