from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Sum
import razorpay
from django.conf import settings
from .models import Menu, Cart, Items, Order, Payment
from .permissions import IsCanteenStaff, IsUser, IsCartUser
from .serializer import (
    MenuSerializer,
    ItemSerializer,
    CartSerializer,
    OrderSerializer,
    PaymentClientSerializer,
    PaymentSerializer,
)


class ListCreateMenu(generics.ListCreateAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
    permission_classes = (IsCanteenStaff,)
    parser_classes = (MultiPartParser, FormParser)

    def get_queryset(self):
        all = self.request.GET.get("all", None)
        if self.request.user.is_superuser and all:
            return super().get_queryset()
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
    permission_classes = (IsAuthenticated,)

    def get_serializer(self, *args, **kwargs):
        if self.request.user.is_superuser and self.request.POST.get("all"):
            return Order.objects.filter(user_id=self.request.user)

        if self.request.user.is_superuser:
            return super().get_serializer(*args, **kwargs)
        return Order.objects.filter(user_id=self.request.user)

    def post(self, request, *args, **kwargs):
        try:
            cart = Cart.objects.get(user_id=request.user)
            razorpay_client = razorpay.Client(
                auth=(settings.RAZOR_KEY_ID, settings.RAZOR_KEY_SECRET)
            )
            amount = int(cart.total) * 100
            currency = "INR"
            razorpay_order = razorpay_client.order.create(
                dict(amount=amount, currency=currency)
            )
            razorpay_order_id = razorpay_order["id"]
            # You may want to specify a valid URL here

            # Serialize the data
            serializer = PaymentClientSerializer(
                data={
                    "razorpay_order_id": razorpay_order_id,
                    "razorpay_merchant_key": settings.RAZOR_KEY_ID,
                    "razorpay_amount": amount,
                    "currency": currency,
                }
            )
            serializer.is_valid(raise_exception=True)

            # Return the serialized data along with the default serializer data
            return Response(
                {
                    "order": super().post(request, *args, **kwargs).data,
                    "payment": serializer.data,
                },
                status=status.HTTP_200_OK,
            )
        except Cart.DoesNotExist:
            return Response(
                {"error": "Cart not found"}, status=status.HTTP_404_NOT_FOUND
            )

    def perform_create(self, serializer):
        serializer.save(user_id=self.request.user)


class PaymentClient(generics.CreateAPIView):
    serializer_class = PaymentSerializer
    queryset = Payment.objects.all()

    def perform_create(self, serializer):
        cart_id = Cart.objects.get(user_id=self.request.user)
        order = Order.objects.get(cart_id=cart_id)
        serializer.save(order=order)


class OrderDelete(generics.DestroyAPIView):
    serializer_class = OrderSerializer
    permission_classes = (IsAuthenticated, IsUser)
    queryset = Order.objects.all()
