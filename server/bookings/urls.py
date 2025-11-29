from django.urls import path
from . import views


urlpatterns = [
        path("bookings/", views.BookingViewSet.as_view({"get": "list", "post": "create"})),
]
