from rest_framework import viewsets

from .models import Screenshot
from .serializers import ScreenshotSerializer

class ScreenshotViewSet(viewsets.ModelViewSet):
    queryset = Screenshot.objects.all().order_by('-created_date')
    serializer_class = ScreenshotSerializer