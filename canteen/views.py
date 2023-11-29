from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Menu
from .permissions import IsCanteenStaff
from .serializer import MenuSerializer


class ListCreateMenu(ListCreateAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
    permission_classes = (IsAuthenticated, IsCanteenStaff)
    parser_classes = (MultiPartParser, FormParser)


class RetrieveUpdateDestroyMenu(RetrieveUpdateDestroyAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
    permission_classes = (IsAuthenticated, IsCanteenStaff)
    parser_classes = (MultiPartParser, FormParser)
