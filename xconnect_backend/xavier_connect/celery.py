# celery.py
from __future__ import absolute_import, unicode_literals
import os
from celery import Celery
from celery.schedules import crontab

# Set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'xavier_connect.settings')

app = Celery('xavier_connect')

# Using a string here means the worker doesn't have to serialize
# the configuration object to child processes.
app.config_from_object('django.conf:settings', namespace='CELERY')

# Load task modules from all registered Django app configs.
app.autodiscover_tasks()

# Define periodic tasks
app.conf.beat_schedule = {
    'send-email-every-day': {
        'task': 'library.tasks.send_email_if_condition_true',
        'schedule': crontab(hour=0, minute=0),  # Run at 00:00 every day
    },
}
