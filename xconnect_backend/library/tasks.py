# tasks.py
from __future__ import absolute_import, unicode_literals
from celery import shared_task
from django.core.mail import send_mail
from yourapp.models import YourModel

@shared_task
def send_email_if_condition_true():
    # Check if the condition is true in your model
    if YourModel.objects.filter(your_condition=True).exists():
        print("hwello clelry workign")
        # If condition is true, send the email
        send_mail(
            'Subject',
            'Message.',
            'from@example.com',
            ['to@example.com'],
            fail_silently=False,
        )
