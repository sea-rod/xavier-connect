from django.urls import path
from .views import GenreListView,GenreView,BooksListView,BookView,ReservationListView,ReservationView,CreateReservation

urlpatterns = [
    path("Genre/",GenreListView.as_view()),
    path("Genre/<str:pk>/", GenreView.as_view()),
    path("Books/",BooksListView.as_view(),name="library"),
    path("Books/<int:pk>/", BookView.as_view()),
    path("Reservation/", ReservationListView.as_view()),
    path("Reservation/<int:pk>/", ReservationView.as_view()),
    path("CreateReservation/", CreateReservation.as_view()),

]
