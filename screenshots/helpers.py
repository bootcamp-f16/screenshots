from django.contrib.auth.models import User
from django.core.mail import send_mail

def send_new_screenshot_email(screenshot):
    # Get all users that have an email address
    user_emails = (User.objects
        .exclude(email__isnull=True)
        .values_list('email', flat=True))

    # Get unique emails addresses
    user_emails = list(set(user_emails))

    send_mail(
        'New Screenshot from Screenshots',
        'Test Message.',
        'matt@apaxsoftware.com',
        user_emails,
        fail_silently=False,
    )
