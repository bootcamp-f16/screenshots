from rest_framework import serializers

from .models import Screenshot

class ScreenshotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Screenshot
        fields = ('id', 'screenshot', 'created_date', )
        read_only_fields = ('screenshot', )