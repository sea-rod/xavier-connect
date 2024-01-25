from django.urls import path
from .views import BooksListView,BookListView,ReservationViewListView,ReservationListView

urlpatterns = [
    path("Books/<int:pk>/", BookListView.as_view()),
    path("Books/",BooksListView.as_view(),name="library"),
    path("ReservationView/", ReservationViewListView.as_view()),
    path("Reservation/<int:pk>/", ReservationListView.as_view()),

]
