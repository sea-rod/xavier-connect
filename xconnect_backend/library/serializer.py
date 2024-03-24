from rest_framework import serializers
from .models import Books,Reservation,Genre,Fine



class GenreViewSerilizer(serializers.ModelSerializer):
   class Meta:
      model = Genre
      fields = ("genre",)
class BooksViewSerializer(serializers.ModelSerializer):
     class Meta:
      model = Books
      fields = ("id","name","author","isbn","genre","total_copies","available_copies","image")

class ReservationViewSerializer(serializers.ModelSerializer):
     class Meta:
      model = Reservation
      fields = ("id","user_id","book_id","reserve_date","return_deadline","return_date","states")

class ReservationSerializer(serializers.ModelSerializer):
     class Meta:
      model = Reservation
      fields = ("book_id",)

      