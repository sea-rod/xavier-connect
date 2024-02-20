# timetable_app/models.py
from django.db import models

class Lecture(models.Model):
    subject = models.CharField(max_length=255)
    teacher = models.CharField(max_length=255)

class Timetable(models.Model):
    day = models.CharField(max_length=255)
    lectures = models.ManyToManyField(Lecture)

class Class(models.Model):
    name = models.CharField(max_length=255)
    timetable = models.ManyToManyField(Timetable)

class Teacher(models.Model):
    name = models.CharField(max_length=255)
    subjects = models.ManyToManyField(Lecture, related_name='teachers_subjects')

class UserInput(models.Model):
    classes = models.JSONField()
    teachers = models.JSONField()
    days = models.JSONField()
    timetable_count = models.IntegerField()
    generations = models.IntegerField()
