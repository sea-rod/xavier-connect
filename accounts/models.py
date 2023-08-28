from django.db import models
from django.core.validators import validate_email
from django.contrib.auth.models import AbstractUser

streams = (
    ("BSc", "BSc"),
    ("Bcom", "Bcom"),
    ("Ba", "Ba"),
    ("BCA", "BCA"),
    ("BBA", "BBA"),
)

classes = (
    ("FY", "FY"),
    ("SY", "SY"),
    ("TY", "TY"),
)


class CustomUser(AbstractUser):
    stream = models.CharField(choices=streams, max_length=50)
    year = models.CharField(choices=classes, max_length=50)
    email = models.EmailField(
        unique=True,
        validators=[validate_email],
        error_messages={
            "unique": ("A user with that email already exists."),
        },
    )
