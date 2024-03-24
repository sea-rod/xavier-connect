from django.shortcuts import render
from django.db.models import Count
from django.contrib.auth.models import Group
from rest_framework import generics,permissions
from rest_framework.response import Response
from django.db import transaction
from django.utils import timezone
from django.core.exceptions import ValidationError
from .models import Genre,Books,Reservation,Fine
from .serializer import BooksViewSerializer,ReservationViewSerializer,ReservationSerializer,GenreViewSerilizer
from .permissions import IsLibraryStaff,IsReserverReadOnly,IsStudent
# Create your views here.


class GenreListView(generics.ListCreateAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreViewSerilizer
    permission_classes = (IsLibraryStaff,)

class GenreView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreViewSerilizer
    permission_classes = (IsLibraryStaff,)

class BooksListView(generics.ListCreateAPIView):
    queryset = Books.objects.all()
    serializer_class = BooksViewSerializer
    permission_classes = (IsLibraryStaff,)
    def get_queryset(self):
        keyword = self.request.GET.get('keyword', '')
        genre = self.request.GET.get('genre', '')
        toppicks= self.request.GET.get('toppicks', '')
        queryset = self.queryset
    
        if keyword:
            queryset = queryset.filter(name__icontains=keyword)
        if genre:
            queryset = queryset.filter(genre__genre__icontains=genre)
        if toppicks:
            queryset = Books.objects.annotate(num_reservations= Count('reservation')).order_by('-num_reservations')[:4]
            return queryset
        return queryset.distinct()

class BookView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Books.objects.all()
    serializer_class = BooksViewSerializer
    permission_classes = (IsLibraryStaff,)

class  ReservationListView(generics.ListCreateAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationViewSerializer
    permission_classes = (IsLibraryStaff,)
    def get_queryset(self):
        user = self.request.user
        current_user_group = user.group

        if current_user_group == Group.objects.get(name= "library_staff"):
              # Check if user is library staff
            return self.queryset.all()  # Return all reservations
        else:
            # Re turn reservations made by the user with states=True
            return self.queryset.filter(user=user, states=True)
        
class CreateReservation(generics.CreateAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    permission_classes = (IsStudent,)#only allow student of the collage to reserve

    @transaction.atomic
    def perform_create(self, serializer):  
        book_id = self.request.data.get('book_id')
        user_id = self.request.user.id
        if not book_id:
            raise ValidationError("Book ID is required.")
        
        book = Books.objects.select_for_update().get(id=book_id)  # Lock the book row for update to prevent concurrent reservation 
        userReservations_count = Reservation.objects.filter(user=user_id,states = True).count()
        if userReservations_count >= 1:
            raise ValidationError("User can make only one reservation. Multiple reservations are not allowed.")
        with transaction.atomic():
            # Update book and create reservation in a transaction
            book.refresh_from_db()  # Refresh book to get the latest available_copies value
            if book.available_copies > 0:  # Check to ensure there are available copies
                serializer.save(user_id=user_id,book_id= book_id)
                book.available_copies -= 1
                book.save() 
            else:
                raise ValidationError("No available copies to reserve.")
          
        
class  ReservationView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationViewSerializer
    permission_classes = (IsReserverReadOnly,)
    
    def partial_update(self, request, *args, **kwargs):# empty patch by library staff when book returned
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)

        # Update return_date and states
        instance.return_date = timezone.now()
        instance.states = False

        # Save the updated instance
        instance.save()

        # Set status of corresponding Fine object to True if exists
        fine_instance = Fine.objects.filter(reservation=instance, status=False).first()
        if fine_instance:
            fine_instance.status = True
            fine_instance.save()

        return Response(serializer.data)

    def get(self, request, *args, **kwargs):#send fine if any
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        data = serializer.data
        fine_instance = Fine.objects.filter(reservation=instance, status=False).first()
        if fine_instance:
            data['fine'] = fine_instance.fine
            print( data)
        return Response(data)
