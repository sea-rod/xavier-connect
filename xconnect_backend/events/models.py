from django.db import models
from django.contrib.auth import get_user_model


class Event(models.Model):
    user_id = models.ForeignKey(get_user_model(), on_delete=models.DO_NOTHING)
    name = models.CharField(max_length=255)
    brochure = models.FileField(upload_to="docs")
    desc = models.TextField()

    def __str__(self):
        return f"{self.name} {self.pk}"


class SubEvent(models.Model):
    event_id = models.ForeignKey(
        Event, on_delete=models.CASCADE, related_name="sub_event"
    )
    name = models.CharField(max_length=255)
    no_of_participants = models.IntegerField()
    img = models.ImageField(default="media/default.png", upload_to="media/events")
    desc = models.TextField()
    rules_n_judging = models.TextField()

    def __str__(self):
        return f"{self.name} {self.pk}"


class Cordinator(models.Model):
    name = models.CharField(max_length=100)
    contact_no = models.IntegerField()
    sub_event = models.ForeignKey(SubEvent, on_delete=models.CASCADE)


class College(models.Model):
    event_id = models.ForeignKey(Event, on_delete=models.CASCADE)
    college_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    token = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.college_name


class Participant(models.Model):
    sub_event_id = models.ForeignKey(SubEvent, on_delete=models.CASCADE)
    college = models.ForeignKey(College, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return str(self.college)
