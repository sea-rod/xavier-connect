from django.db import models


class Menu(models.Model):
    item_name = models.CharField(max_length=255)
    price = models.FloatField()
    image = models.ImageField(default="media/default.png")
    avail_quantity = models.IntegerField(default=0)
    status = models.BooleanField(default=False)

    def __str__(self):
        return self.item_name
