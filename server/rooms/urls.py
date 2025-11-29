from rest_framework.routers import DefaultRouter
from django.urls import base, include, path 
from . import views


router = DefaultRouter()
router.register(r"rooms", viewset=views.RoomViewSet, basename="room")
router.register(r"tags", viewset=views.TagViewSet, basename="tag")

urlpatterns = [
        path("", include(router.urls)),
];

