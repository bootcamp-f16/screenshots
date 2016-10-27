from django.views.generic import TemplateView
from rest_framework import generics
from rest_framework.parsers import MultiPartParser

from .models import Screenshot
from .serializers import ScreenshotUploadSerializer

class ScreenshotUpload(generics.CreateAPIView):
    model = Screenshot
    serializer_class = ScreenshotUploadSerializer
    parser_classes = (MultiPartParser,)

class AppView(TemplateView):
    template_name = 'screenshots/app.html'