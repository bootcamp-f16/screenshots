from django.contrib import admin

from .models import Screenshot

class ScreenshotAdmin(admin.ModelAdmin):
    list_display = ('id', 'screenshot', 'created_date')

admin.site.register(Screenshot, ScreenshotAdmin)
