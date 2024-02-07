from django.db import models
from django.utils import timezone
from datetime import timedelta
from django.contrib.auth import get_user_model

# Create your models here.
class Books(models.Model):
    id = models.AutoField(primary_key=True)
    book_name = models.CharField(max_length = 250)
    isbn = models.DecimalField(max_digits=13,decimal_places=0)    
    category = models.TextField()
    avaliable_copys = models.IntegerField(default=0)

    
    def __str__(self):
        return self.book_name


class Reservation(models.Model):
    ReservationId = models.AutoField(primary_key=True)
    user_id = models.OneToOneField(get_user_model(),on_delete = models.CASCADE)
    book_id = models.ForeignKey(Books,on_delete = models.CASCADE)
    reserve_date = models.DateTimeField(auto_now_add=True)
    return_date = models.DateTimeField()
    states = models.BooleanField(default = True)

    def save(self, *args, **kwargs):
        # Add 30 days to the current datetime
        current_time = timezone.now()
        self.return_date = current_time +timezone.timedelta(days=30)
        super().save(*args, **kwargs)
   

    def __str__(self):
        return str(self.ReservationId)
   
        


class Fine(models.Model):
    status =  models.BooleanField(default = False)
    resrevation_id = models.ForeignKey(Reservation,on_delete = models.CASCADE)
    fine = models.FloatField(default = 30)

    def __str__(self):
            return str(self.user_id)