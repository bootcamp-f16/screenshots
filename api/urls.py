from django.conf.urls import include, url
from rest_framework import routers

from screenshots.viewsets import ScreenshotViewSet
from screenshots.views import ScreenshotUpload

router = routers.DefaultRouter()
router.register(r'screenshots', ScreenshotViewSet)

urlpatterns = [
    url(r'^screenshots/upload/$', ScreenshotUpload.as_view(), name="screenshot-upload"),
    url(r'^', include(router.urls)),
]