from rest_framework import generics
from django.contrib.auth import get_user_model
from .serializer import CustomUserSerlizer


class SignUpAPI(generics.CreateAPIView):
    queryset = get_user_model().objects.none()
    serializer_class = CustomUserSerlizer
