from django.shortcuts import render
# from django.views.generic import ListView
from rest_framework import generics,permissions
from .models import Books,Reservation
from .serializer import BookSerializer,ReservationViewSerializer,ReservationSerializer

#for html templet view
# class BooksListView(ListView):
#     model = Books
#     template_name = "Books_list.html"

class BooksListView(generics.ListCreateAPIView):
    permission_classes =(permissions.AllowAny,)
    queryset = Books.objects.all()
    serializer_class = BookSerializer

class BookListView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes =(permissions.AllowAny,)
    queryset = Books.objects.all()
    serializer_class = BookSerializer

class  ReservationViewListView(generics.ListCreateAPIView):
   
    queryset = Reservation.objects.all()
    serializer_class = ReservationViewSerializer

class  ReservationListView(generics.RetrieveUpdateDestroyAPIView):
   
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer



# Create your views here.
