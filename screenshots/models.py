from django.db import models

class Screenshot(models.Model):
    screenshot = models.ImageField(
        upload_to="screenshots/",
        blank=True,
        null=True)
    created_date = models.DateTimeField(auto_now_add=True)
