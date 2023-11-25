from django.urls import path
from .views import ListCreateMenu, RetrieveUpdateDestroyMenu

urlpatterns = [
    path("menu/", ListCreateMenu.as_view()),
    path("menu/<int:pk>/edit/", RetrieveUpdateDestroyMenu.as_view()),
]
