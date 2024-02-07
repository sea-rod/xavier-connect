from django.urls import path
from .views import  *

urlpatterns = [
    path("Books/<int:pk>/", BookListView.as_view()),
    path("Books/",BooksListView.as_view(),name="library"),
    path("ReservationView/", ReservationListView.as_view()),
    path("Reservation/<int:pk>/", ReservationView.as_view()),

]
