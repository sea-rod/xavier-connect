from django.urls import path,include
from .views import EventsListView,EventView

urlpatterns = [
    path("event/",EventsListView.as_view()),
    path("event/<int:pk>/",EventView.as_view()),


]
