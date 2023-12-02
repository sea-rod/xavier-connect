from django.urls import path
from .views import ListCreateMenu, RetrieveUpdateDestroyMenu

urlpatterns = [
    path("menu/", ListCreateMenu.as_view()),
    path("<int:pk>/menu/", RetrieveUpdateDestroyMenu.as_view()),
]
