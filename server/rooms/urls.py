from rest_framework.routers import DefaultRouter
from django.urls import include, path
from . import views

router = DefaultRouter()
router.register(r"rooms", viewset=views.RoomViewSet, basename="room")
router.register(r"tags", viewset=views.TagViewSet, basename="tag")
router.register(r"room-types", viewset=views.RoomTypeViewSet, basename="room_type")
router.register(
    r"availability", viewset=views.RoomAvailabilityViewSet, basename="room_availability"
)

urlpatterns = [
    path("", include(router.urls)),
]

