from rest_framework import serializers
from django.contrib.auth import get_user_model
from .validators import password_mismatch, password_validationAPI
from rest_framework.exceptions import ValidationError


class CustomUserSerlizer(serializers.ModelSerializer):
    password2 = serializers.CharField()

    class Meta:
        model = get_user_model()
        fields = ("id", "username", "email", "password", "password2", "year", "stream")
        extra_kwargs = {"password": {"write_only": True}}

    def validate(self, attrs):
        password2 = attrs.pop("password2")
        password = attrs.get("password")
        user = get_user_model()(**attrs)

        password_mismatch(password, password2)
        password_validationAPI(password, user)
        return super().validate(attrs)


class CustomUserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ("id", "username", "email", "year", "stream")


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
