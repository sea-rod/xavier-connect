from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Count, Sum, Q
from .models import Menu, Cart, Items, Order
from .permissions import IsCanteenStaff, IsUser, IsCartUser
from .serializer import MenuSerializer, ItemSerializer, CartSerializer, OrderSerializer


class ListCreateMenu(generics.ListCreateAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
    permission_classes = (IsCanteenStaff,)
    parser_classes = (MultiPartParser, FormParser)

    def get_queryset(self):
        search = self.request.GET.get("search", None)
        popular = self.request.GET.get("popular", None)

        print(popular)
        cart = Cart.objects.filter(user_id=None)
        menu = (
            Menu.objects.filter(id__in=Items.objects.filter(cart_id__in=cart))
            .annotate(order=Sum("items__quantity"))
            .order_by("-order")[:4]
        )
        if popular:
            return menu

        if search:
            return Menu.objects.filter(item_name__contains=search)

        return Menu.objects.exclude(pk__in=(item.pk for item in list(menu)))


class RetrieveUpdateDestroyMenu(generics.RetrieveUpdateDestroyAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
    permission_classes = (IsAuthenticated, IsCanteenStaff)
    parser_classes = (MultiPartParser, FormParser)


class CreateItem(generics.CreateAPIView):
    serializer_class = ItemSerializer
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        cart_id = Cart.objects.get(user_id=self.request.user.id)
        serializer.save(cart_id=cart_id)


class DeleteItem(generics.DestroyAPIView):
    serializer_class = ItemSerializer
    permission_classes = (IsAuthenticated, IsCartUser)
    queryset = Items.objects.all()


class ListCart(generics.ListAPIView):
    serializer_class = CartSerializer
    permission_classes = (IsAuthenticated, IsUser)
    queryset = Cart.objects.all()

    def get(self, request, *args, **kwargs):
        cart = Cart.objects.get(user_id=request.user)
        serializer = self.get_serializer(cart)

        return Response(serializer.data, status=status.HTTP_200_OK)


class OrderCreate(generics.ListCreateAPIView):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()

    def perform_create(self, serializer):
        serializer.save(user_id=self.request.user)
