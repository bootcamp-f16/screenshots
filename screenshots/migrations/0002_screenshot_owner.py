# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('screenshots', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='screenshot',
            name='owner',
            field=models.ForeignKey(default=7, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]