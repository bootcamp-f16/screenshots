from django.db import models
from django.conf import settings

class Screenshot(models.Model):
    screenshot = models.ImageField(
        upload_to="screenshots/",
        blank=True,
        null=True)
    created_date = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL)
