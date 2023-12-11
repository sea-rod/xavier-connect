from rest_framework import generics
from rest_framework.response import Response
from rest_framework import viewsets
from canteen.permissions import IsUser
from .serializer import EventSerializer,SubEventSerializer
from .models import Event,SubEvent
from .permissions import IsTeacher

class EventViewSet(viewsets.ModelViewSet):
    permission_classes = (IsTeacher,IsUser)
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def list(self, request, *args, **kwargs):
        serializer = self.get_serializer(self.get_queryset(), many=True, context={'request':request,'include_sub_events': False})
        return Response(serializer.data)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, context={'request':request,'include_sub_events': True})
        return Response(serializer.data)
    def perform_create(self, serializer):
        serializer.save(user_id=self.request.user)


class SubEventDetailsAPI(generics.RetrieveAPIView):
    serializer_class = SubEventSerializer
    queryset = SubEvent.objects.all()
