from django.urls import path 
from .views import  GenTimeTable

urlpatterns = [
path("", GenTimeTable.as_view(), name="")


]