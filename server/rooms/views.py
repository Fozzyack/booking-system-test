from django.shortcuts import render
from rest_framework import generics

from .models import TagItem
from .models import Rooms
from .serializer import RoomSerializer, TagItemSerializer

# Create your views here.

class RoomList(generics.ListCreateAPIView):
    queryset = Rooms.objects.all()
    serializer_class = RoomSerializer

class RoomDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Rooms.objects.all()
    serializer_class = RoomSerializer

class TagList(generics.ListCreateAPIView):
    queryset = TagItem.objects.all()
    serializer_class = TagItemSerializer

class TagDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = TagItem.objects.all()
    serializer_class = TagItemSerializer
