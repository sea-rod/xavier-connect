from django.db import models

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
    stream = models.CharField(choices=streams, default="Bsc", max_length=50)
    year = models.CharField(choices=classes, default=classes, max_length=50)
