from django.contrib.auth import get_user_model
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .permissions import IsUser
from .serializer import (
    CustomUserSerlizer,
    CustomUserUpdateSerializer,
    PasswordChangeSerializer,
)


class SignUpAPI(generics.CreateAPIView):
    queryset = get_user_model().objects.none()
    serializer_class = CustomUserSerlizer


class UpdateUserAPI(generics.RetrieveUpdateAPIView):
    queryset = get_user_model().objects.none()
    serializer_class = CustomUserUpdateSerializer
    permission_classes = (IsAuthenticated, IsUser)

    def get_queryset(self):
        return get_user_model().objects.all()


class ChangePasswordAPI(generics.GenericAPIView):
    serializer_class = PasswordChangeSerializer
    permission_classes = (IsAuthenticated,)

    def post(self, request: Request, *args, **kargs):
        serializer = self.get_serializer(data=request.data)
        user = request.user
        if serializer.is_valid():
            user.set_password(serializer.validated_data["new_password"])
            user.save()
            return Response(
                {"message": "Password successfully changed."}, status=status.HTTP_200_OK
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
