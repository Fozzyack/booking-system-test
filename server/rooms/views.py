from django.shortcuts import render
from rest_framework import  viewsets

from .models import TagItem
from .models import Rooms
from .serializer import RoomSerializer, TagItemSerializer

# Create your views here.

class RoomViewSet(viewsets.ModelViewSet):
    queryset = Rooms.objects.all()
    serializer_class = RoomSerializer

class TagViewSet(viewsets.ModelViewSet):
    queryset = TagItem.objects.all()
    serializer_class = TagItemSerializer

