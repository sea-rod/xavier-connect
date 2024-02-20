# timetable_app/urls.py
from django.urls import path
from .views import generate_timetable

urlpatterns = [
    path('generate_timetable/', generate_timetable, name='generate_timetable'),
]
