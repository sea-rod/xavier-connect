from django.shortcuts import render
from rest_framework import generics
from .models import Events
from .serializer import EventSerializer
from .permissions import IsTeacherOrIsUserReadOnly

# Create your views here.
class EventsListView(generics.ListCreateAPIView):
    queryset = Events.objects.all()
    serializer_class = EventSerializer
    permission_classes = (IsTeacherOrIsUserReadOnly,)

class EventView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Events
    serializer_class = EventSerializer
    permission_classes = (IsTeacherOrIsUserReadOnly,)

