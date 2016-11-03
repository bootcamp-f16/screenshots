from django.db import models
from django.conf import settings
from django.core.urlresolvers import reverse
from django.core.mail import send_mail

class Screenshot(models.Model):
    screenshot = models.ImageField(
        upload_to="screenshots/",
        blank=True,
        null=True)
    created_date = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL)

    def get_absolute_url(self):
        return reverse('screenshots:app') + '#/screenshot/{}'.format(self.pk)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        send_mail(
            'Test Subject',
            'Test Message.',
            'matt@apaxsoftware.com',
            ['mtsmit2@gmail.com'],
            fail_silently=False,
        )
