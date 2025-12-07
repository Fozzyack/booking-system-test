from datetime import datetime
from typing import Any

from django.db import transaction

from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from rest_framework.request import Request

from .models import TagItem, RoomType, RoomAvailability, Rooms
from .serializer import (
    RoomSerializer,
    TagItemSerializer,
    RoomTypeSerializer,
    RoomAvailabilitySerializer,
)


class RoomViewSet(viewsets.ModelViewSet):
    queryset = Rooms.objects.all()
    serializer_class = RoomSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    @action(detail=False, methods=["get"], url_path="free-on")
    def get_rooms_with_date(self, request):
        query_params = request.query_params

        date_str = query_params.get("date")
        if date_str == "" or date_str is None:
            return Response(
                {"error": "Must provide a date param"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            date_obj = datetime.fromisoformat(date_str)
        except ValueError:
            return Response(
                {"error": "Must provide a valid date"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        return Response(
            {"Message": "To be continued", "Date": date_obj},
            status=status.HTTP_200_OK,
        )

    @action(detail=True, methods=["get"], url_path="available-hours")
    def get_available_hours(self, request: Request, pk: Any = None):
        """Get available booking hours for a specific room"""
        room = self.get_object()
        availability = RoomAvailability.objects.filter(room=room)
        serializer = RoomAvailabilitySerializer(availability, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(detail=True, methods=["post"], url_path="set-hours")
    def set_available_hours(self, request, pk=None):
        """Set available booking hours for a room (admin only)"""
        room = self.get_object()
        data = request.data

        if not isinstance(data, list):
            return Response(
                {"error": "Expected a list of availability entries"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializers = []
        for entry in data:
            entry["room"] = room.id
            room_serializer = RoomAvailabilitySerializer(data=entry)
            if not room_serializer.is_valid():
                return Response(room_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            serializers.append(room_serializer)


        with transaction.atomic():
            RoomAvailability.objects.filter(room=room).delete()
            entries = [s.save() for s in serializers]

        return Response(
            [RoomAvailabilitySerializer(e).data for e in entries],
            status=status.HTTP_201_CREATED
        )




class TagViewSet(viewsets.ModelViewSet):
    queryset = TagItem.objects.all()
    serializer_class = TagItemSerializer


class RoomTypeViewSet(viewsets.ModelViewSet):
    queryset = RoomType.objects.all()
    serializer_class = RoomTypeSerializer


class RoomAvailabilityViewSet(viewsets.ModelViewSet):
    queryset = RoomAvailability.objects.all()
    serializer_class = RoomAvailabilitySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        """
        Optionally filter availability by room_id query parameter
        Example: /api/availability/?room_id=1
        """
        queryset = RoomAvailability.objects.all()
        room_id = self.request.query_params.get("room_id", None)
        if room_id is not None:
            queryset = queryset.filter(room_id=room_id)
        return queryset
