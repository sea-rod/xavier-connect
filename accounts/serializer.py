from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth import forms, password_validation
from django.core import exceptions
from rest_framework.exceptions import ValidationError


class CustomUserSerlizer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ("id", "username", "email", "password")
        extra_kwargs = {"password": {"write_only": True}}

    def validate(self, attrs):
        user = get_user_model()(**attrs)
        password = attrs.get("password")
        error = dict()
        try:
            password_validation.validate_password(password=password, user=user)
        except exceptions.ValidationError as e:
            error["password"] = e.messages

        if error:
            raise ValidationError(error)

        return super().validate(attrs)

    def create(self, validated_data):
        user = get_user_model().objects.create_user(**validated_data)
        return user
