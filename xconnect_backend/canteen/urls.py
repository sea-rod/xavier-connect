from django.urls import path
from .views import ListCreateMenu, RetrieveUpdateDestroyMenu,CreateItem,ListCart,UpdateIten

urlpatterns = [
    path("menu/", ListCreateMenu.as_view()),
    path("<int:pk>/menu/", RetrieveUpdateDestroyMenu.as_view()),
    path("item/", CreateItem.as_view()),
    path("<int:pk>/item/",UpdateIten.as_view()),
    path("cart/",ListCart.as_view())
]
