from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model


# Create your models here.
class Genre(models.Model):
      genre = models.CharField(max_length = 50, unique = True, primary_key=True)

      def __str__(self):
            return self.genre
      
class Books(models.Model):
    name = models.CharField(max_length = 250)
    author = models.CharField(max_length = 250)
    isbn = models.DecimalField(max_digits=13,decimal_places=0)    
    genre = models.ManyToManyField(Genre)    
    available_copies = models.IntegerField(default=1)
    total_copies = models.IntegerField(default = 1)
    image = models.ImageField(upload_to="media/library",default="media/library/default.png")

    def save(self, *args, **kwargs):
            self.available_copies = self.total_copies
            super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Reservation(models.Model):
    user = models.ForeignKey(get_user_model(),on_delete = models.CASCADE)
    book = models.ForeignKey(Books,on_delete = models.CASCADE)
    reserve_date = models.DateTimeField(auto_now_add=True)
    return_deadline = models.DateTimeField()
    return_date = models.DateTimeField(null=True, blank=True)#mostly empty only marked when book returned celery
    states = models.BooleanField(default = True)

    def save(self, *args, **kwargs):
            # Add 30 days to the current datetime/return_deadline
            current_time = timezone.now()
            self.return_deadline = current_time + timezone.timedelta(days=30)
            super().save(*args, **kwargs)

    def __str__(self):
        return str(self.id)
   
        


class Fine(models.Model):
    status =  models.BooleanField(default = False) # payed or not 
    reservation = models.ForeignKey(Reservation,on_delete = models.CASCADE)
    fine = models.FloatField(default = 30)

    def __str__(self):
            return f'resive_id:{self.reservation} fine:{self.fine}'