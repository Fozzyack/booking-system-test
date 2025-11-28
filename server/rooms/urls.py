from django.urls import path 
from . import views

urlpatterns = [
        path("rooms/", views.RoomList.as_view()),
        path("rooms/<int:pk>/", views.RoomDetails.as_view()),
        path("tags/", views.TagList.as_view()),
        path("tags/<int:pk>/", views.TagDetails.as_view()),
];

