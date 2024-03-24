# timetable_app/urls.py
from django.urls import path
from .views import  TimetableGenerator

urlpatterns = [
    path('gt/', TimetableGenerator.as_view(), name='generate_timetable'),
]
