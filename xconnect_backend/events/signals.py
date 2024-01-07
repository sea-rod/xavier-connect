from django.core.mail import EmailMultiAlternatives
from django.dispatch import receiver
from django.dispatch import Signal
from django.template.loader import render_to_string
from django.urls import reverse


college_saved = Signal()


@receiver(college_saved)
def send_event_register_email(sender, instance, token, *args, **kwargs):
    """
    Handles password reset tokens
    When a token is created, an e-mail needs to be sent to the user
    :param sender: View Class that sent the signal
    :param instance: View Instance that sent the signal
    :param reset_password_token: Token Model Object
    :param args:
    :param kwargs:
    :return:
    """
    # send an e-mail to the user
    context = {
        "college": token.college_name,
        "email": token.email,
        "register_url": "{}".format(
            instance.request.build_absolute_uri(
                reverse("register_sub", kwargs={"token": token.token})
            ),
        ),
    }

    # render email text
    email_html_message = render_to_string("email/college_event_register.html", context)
    email_plaintext_message = render_to_string(
        "email/college_event_register.txt", context
    )

    msg = EmailMultiAlternatives(
        # title:
        "Password Reset for {title}".format(title="Some website title"),
        # message:
        email_plaintext_message,
        # from:
        "noreply@somehost.local",
        # to:
        [token.email],
    )
    msg.attach_alternative(email_html_message, "text/html")
    msg.send()
