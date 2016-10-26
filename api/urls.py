from django.conf.urls import include, url
from rest_framework import routers

from screenshots.viewsets import ScreenshotViewSet

router = routers.DefaultRouter()
router.register(r'screenshots', ScreenshotViewSet)

urlpatterns = [
    url(r'^', include(router.urls)), 
]