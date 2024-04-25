from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from django.conf import settings
from .models import Books,Reservation  # Import your models here

@receiver(post_save, sender=Reservation)
def update_BookCopies(sender, instance,created, **kwargs):
        if created:
                try:
                        book = Books.objects.get(id=instance.book_id)
                        subject = "Book Reservation Receipt"
                        message = f'You have reserved the book:{book.name}::\n{book.genre},with isbn:{book.isbn}'
                        recipient_list = instance.user.email
                        #send_mail(subject, message, settings.EMAIL_HOST_USER, recipient_list)
                        print("email sent")
                except Books.DoesNotExist:
                        print("Book with id {} does not exist".format(instance.book_id))
                