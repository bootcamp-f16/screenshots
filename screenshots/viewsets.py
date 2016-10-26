from rest_framework import viewsets

from .models import Screenshot
from .serializers import ScreenshotSerializer

class ScreenshotViewSet(viewsets.ModelViewSet):
    queryset = Screenshot.objects.all()
    serializer_class = ScreenshotSerializer