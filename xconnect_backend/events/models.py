from django.db import models
from django.contrib.auth import get_user_model

class Event(models.Model):
    user_id = models.ForeignKey(get_user_model(),on_delete=models.DO_NOTHING)
    name = models.CharField(max_length=255)


class SubEvent(models.Model):
    event_id = models.ForeignKey(Event,on_delete=models.CASCADE,related_name="sub_event")
    name = models.CharField(max_length=255)
    no_of_participants = models.IntegerField()
    img = models.ImageField(default="media/default.png",upload_to="media/events")
    desc = models.TextField()
