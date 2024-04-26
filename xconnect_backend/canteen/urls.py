from django.urls import path
from .views import (
    ListCreateMenu,
    RetrieveUpdateDestroyMenu,
    CreateItem,
    ListCart,
    DeleteItem,
    OrderCreate,
    PaymentClient,
)

urlpatterns = [
    path("menu/", ListCreateMenu.as_view()),
    path("<int:pk>/menu/", RetrieveUpdateDestroyMenu.as_view()),
    path("item/", CreateItem.as_view()),
    path("<int:pk>/item/", DeleteItem.as_view()),
    path("cart/", ListCart.as_view()),
    path("order/", OrderCreate.as_view()),
    path("payment-client/", PaymentClient.as_view()),
]
