from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import ClassStream, Stream, Class
from .permissions import IsUser, EditOnlyByAdmin
from .serializer import (
    CustomUserSerializer,
    CustomUserUpdateSerializer,
    PasswordChangeSerializer,
    StreamSerializer,
    ClassSerializer,
    ClassStreamSerializer,
)


class SignUpAPI(generics.CreateAPIView):
    # queryset = get_user_model().objects.none()
    serializer_class = CustomUserSerializer


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


class ListCreateStreamAPI(generics.ListAPIView):
    serializer_class = StreamSerializer
    queryset = Stream.objects.all()

    # permission_classes = [
    #     EditOnlyByAdmin,
    # ]
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer_class()
        serializer = serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        stream, _ = Stream.objects.get_or_create(
            stream_name=serializer.validated_data["stream_name"]
        )

        class_data = serializer.validated_data.get("class_name")
        if class_data:
            for data in class_data:
                class_name, _ = Class.objects.get_or_create(
                    class_name=data["class_name"]
                )
                stream.class_name.add(class_name)

        return Response(StreamSerializer(stream).data)


class StreamUpdateAPI(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = StreamSerializer
    queryset = Stream.objects.all()


class ClassListCreateAPI(generics.ListCreateAPIView):
    serializer_class = ClassSerializer
    permission_classes = (EditOnlyByAdmin,)
    queryset = Class.objects.all()


class ClassUpdateDeleteAPI(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ClassSerializer
    permission_classes = (IsAdminUser,)


class ClassStreamListAPI(generics.ListAPIView):
    serializer_class = ClassStreamSerializer
    queryset = ClassStream.objects.all()


class ClassStreamDestroyAPI(generics.DestroyAPIView):
    serializer_class = ClassStreamSerializer
    queryset = ClassStream.objects.all()
    permission_classes = (IsAdminUser,)
