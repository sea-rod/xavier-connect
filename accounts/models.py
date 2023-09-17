from django.db import models
from django.core.validators import validate_email
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import Group


class CustomUser(AbstractUser):
    email = models.EmailField(
        unique=True,
        validators=[validate_email],
        error_messages={
            "unique": ("A user with that email already exists."),
        },
    )
    group = models.ForeignKey(
        Group,
        on_delete=models.CASCADE,
    )
