from rest_framework import serializers
from .models import Books,Reservation

class BookSerializer(serializers.ModelSerializer):
     class Meta:
      model = Books
      fields = ("id","book_name","isbn","category","avaliable_copys")

class ReservationViewSerializer(serializers.ModelSerializer):
     class Meta:
      model = Reservation
      fields = ("user_id","book_id","reserve_date","return_date","states")

class ReservationSerializer(serializers.ModelSerializer):
     class Meta:
      model = Reservation
      fields = ("user","book")