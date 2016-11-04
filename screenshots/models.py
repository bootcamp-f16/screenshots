from django.db import models
from django.conf import settings
from django.core.urlresolvers import reverse

from .helpers import send_new_screenshot_email

class Screenshot(models.Model):
    screenshot = models.ImageField(
        upload_to="screenshots/",
        blank=True,
        null=True)
    created_date = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL)

    def get_absolute_url(self):
        return reverse('screenshots:app') + '#/screenshot/{}'.format(self.pk)

    def get_email_url(self):
        return settings.BASE_URL + self.get_absolute_url()

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        send_new_screenshot_email(self)