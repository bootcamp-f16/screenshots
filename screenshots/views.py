from django.views.generic import TemplateView
from rest_framework import generics
from rest_framework.parsers import MultiPartParser
from rest_framework.permissions import IsAuthenticated

from .models import Screenshot
from .serializers import ScreenshotUploadSerializer
from .permissions import IsOwnerOrReadOnly

class ScreenshotUpload(generics.CreateAPIView):
    model = Screenshot
    serializer_class = ScreenshotUploadSerializer
    parser_classes = (MultiPartParser,)
    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly, )

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class AppView(TemplateView):
    template_name = 'screenshots/app.html'