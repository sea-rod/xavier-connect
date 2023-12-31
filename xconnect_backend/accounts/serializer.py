from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group
from .validators import password_mismatch, password_validationAPI
from rest_framework.exceptions import ValidationError
from .models import ClassStream, Stream, Class


class ClassStreamSerializer(serializers.ModelSerializer):
    class_name = serializers.CharField()
    stream_name = serializers.CharField()

    class Meta:
        model = ClassStream
        fields = ("id", "class_name", "stream_name")


class CustomUserSerializer(serializers.ModelSerializer):
    class_stream = ClassStreamSerializer()
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = get_user_model()
        fields = (
            "id",
            "username",
            "email",
            "password",
            "password2",
            "class_stream",
        )
        extra_kwargs = {
            "id": {"read_only": True},
            "password": {"write_only": True},
        }

    def validate(self, attrs):
        class_stream = attrs.get("class_stream")
        class_name = class_stream.get("class_name")
        stream_name = class_stream.get("stream_name")

        try:
            class_stream_obj = ClassStream.objects.get(
                class_name=Class.objects.get(class_name=class_name),
                stream_name=Stream.objects.get(stream_name=stream_name),
            )
        except Exception as e:
            raise ValidationError({"class_stream": "invalid Class or Stream"})

        attrs["class_stream"] = class_stream_obj
        attrs["group"] = Group.objects.get_or_create(name="student")[0]

        password2 = attrs.pop("password2")
        password = attrs.get("password")

        user = get_user_model()(**attrs)
        password_mismatch(password, password2)
        password_validationAPI(password, user)
        return super().validate(attrs)

    def create(self, validated_data):
        print(validated_data)
        user = get_user_model().objects.create_user(**validated_data)
        return user


class CustomUserUpdateSerializer(serializers.ModelSerializer):
    class_stream = ClassStreamSerializer()

    class Meta:
        model = get_user_model()
        fields = ("id", "username", "email", "class_stream")

    def validate(self, attrs):
        class_stream = attrs.get("class_stream")
        class_name = class_stream.get("class_name")
        stream_name = class_stream.get("stream_name")

        try:
            class_stream_obj = ClassStream.objects.get(
                class_name=Class.objects.get(class_name=class_name),
                stream_name=Stream.objects.get(stream_name=stream_name),
            )
        except Exception as e:
            raise ValidationError({"class_stream": "invalid Class or Stream"})

        attrs["class_stream"] = class_stream_obj
        return super().validate(attrs)


class PasswordChangeSerializer(serializers.Serializer):
    old_password = serializers.CharField()
    new_password = serializers.CharField()
    new_password2 = serializers.CharField()

    def validate(self, attrs):
        new_password = attrs["new_password"]
        new_password2 = attrs["new_password2"]
        old_password = attrs["old_password"]
        user = self.context["request"].user
        if not user.check_password(old_password):
            raise ValidationError(
                {"password": "password doesn't match the old password"}
            )
        password_mismatch(new_password, new_password2)
        password_validationAPI(new_password, user)
        return super().validate(attrs)


class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = (
            "id",
            "class_name",
        )


class StreamSerializer(serializers.ModelSerializer):
    id = serializers.PrimaryKeyRelatedField(read_only=True)
    stream_name = serializers.CharField(required=True)
    class_name = ClassSerializer(many=True, required=False)

    class Meta:
        model = Stream
        fields = ("id", "stream_name", "class_name")

    def run_validation(self, data=...):
        stream_name_value = data.get("stream_name", None)
        if stream_name_value is None:
            raise ValidationError({"stream_name": "Stream name required"})
        return data

    def update(self, instance, validated_data):
        print(instance, validated_data)
        instance.stream_name = validated_data.get("stream_name")
        return instance
