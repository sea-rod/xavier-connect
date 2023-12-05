from django.db import models
from django.contrib.auth import get_user_model

class Menu(models.Model):
    item_name = models.CharField(max_length=255)
    price = models.FloatField()
    image = models.ImageField(default="media/default.png", upload_to="media")
    avail_quantity = models.IntegerField(default=0)
    status = models.BooleanField(default=False)

    def __str__(self):
        return self.item_name

class Cart(models.Model):
    user_id = models.OneToOneField(get_user_model(),on_delete=models.CASCADE)
    status = models.BooleanField(default=False)
    total = models.DecimalField(max_digits=10,decimal_places=2,default=0)
    menu_id = models.ManyToManyField(Menu,through="Items")

class Items(models.Model):
    cart_id = models.ForeignKey(Cart,on_delete=models.CASCADE)
    menu_id = models.ForeignKey(Menu,on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    price = models.DecimalField(max_digits=10,decimal_places=2,default=0)