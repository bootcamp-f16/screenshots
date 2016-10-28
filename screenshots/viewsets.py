from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Screenshot
from .serializers import ScreenshotSerializer
from .permissions import IsOwnerOrReadOnly

class ScreenshotViewSet(viewsets.ModelViewSet):
    queryset = Screenshot.objects.all().order_by('-created_date')
    serializer_class = ScreenshotSerializer
    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly, )