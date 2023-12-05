from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Menu,Cart
from .permissions import IsCanteenStaff,IsUser
from .serializer import MenuSerializer,ItemSerializer,CartSerializer


class ListCreateMenu(generics.ListCreateAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
    permission_classes = (IsAuthenticated, IsCanteenStaff)
    parser_classes = (MultiPartParser, FormParser)


class RetrieveUpdateDestroyMenu(generics.RetrieveUpdateDestroyAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
    permission_classes = (IsAuthenticated,IsCanteenStaff)
    parser_classes = (MultiPartParser, FormParser)

class CreateItem(generics.CreateAPIView):
    serializer_class = ItemSerializer
    permission_classes = (IsAuthenticated,)
    
    def perform_create(self, serializer):
        cart_id = Cart.objects.get(user_id=self.request.user.id)
        serializer.save(cart_id=cart_id)
    
class ListCart(generics.RetrieveAPIView):
    serializer_class = CartSerializer
    permission_classes = (IsAuthenticated,IsUser)
    queryset = Cart.objects.all()