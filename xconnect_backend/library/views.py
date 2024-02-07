from django.shortcuts import render
# from django.views.generic import ListView
from rest_framework import generics,permissions
from .models import Books,Reservation
from .serializer import BookSerializer,ReservationViewSerializer,ReservationSerializer
from .permissions import is_libraryStaff

#for html templet view
# class BooksListView(ListView):
#     model = Books
#     template_name = "Books_list.html"

class BooksListView(generics.ListCreateAPIView):
    permission_classes = [is_libraryStaff]
    queryset = Books.objects.all()
    serializer_class = BookSerializer

class BookListView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Books.objects.all()
    serializer_class = BookSerializer

class  ReservationListView(generics.ListCreateAPIView):
    queryset = Reservation.objects.all()
    def get_serializer_class(self):
        if self.request.method == 'GET':
            return ReservationViewSerializer
        else:
            return ReservationSerializer

class  ReservationView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationViewSerializer



# Create your views here.