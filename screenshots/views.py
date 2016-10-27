from rest_framework import generics
from rest_framework.parsers import MultiPartParser

from .models import Screenshot
from .serializers import ScreenshotUploadSerializer

class ScreenshotUpload(generics.CreateAPIView):
    model = Screenshot
    serializer_class = ScreenshotUploadSerializer
    parser_classes = (MultiPartParser,)