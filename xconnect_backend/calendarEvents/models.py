from django.db import models

# Create your models here.

class Events (models.Model):
    name = models.CharField(max_length=255)
    date = models.DateField()
    description = models.TextField()

    def __str__(self):
        return self.name
