from rest_framework import serializers

from .models import Screenshot

class ScreenshotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Screenshot
        fields = ('id', 'screenshot', 'created_date', 'owner',)
        read_only_fields = ('screenshot', 'owner', )


class ScreenshotUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Screenshot
        fields = ('id', 'screenshot', 'created_date', )
