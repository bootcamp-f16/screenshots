from django.core.mail import send_mail

def send_new_screenshot_email(screenshot):
    send_mail(
        'New Screenshot',
        'Test Message.',
        'matt@apaxsoftware.com',
        ['mtsmit2@gmail.com'],
        fail_silently=False,
    )
