from django.contrib.auth.models import User
from django.core.mail import EmailMultiAlternatives
from django.conf import settings
from django.template.loader import get_template

def send_new_screenshot_email(screenshot):
    # Get all users that have an email address
    user_emails = (User.objects
        .exclude(email__isnull=True)
        .values_list('email', flat=True))

    # Get unique emails addresses
    user_emails = list(set(user_emails))

    # Get a text template to render
    text_template = get_template('screenshots/emails/new_screenshot.txt')
    html_template = get_template('screenshots/emails/new_screenshot.html')

    subject, from_email = 'New Screenshot', settings.DEFAULT_FROM_EMAIL

    text_content = text_template.render()
    html_content = html_template.render()
    msg = EmailMultiAlternatives(subject, text_content, from_email, user_emails)
    msg.attach_alternative(html_content, "text/html")
    msg.send()