from datetime import time
from rest_framework import serializers
from .models import RoomType, Rooms, TagItem, RoomAvailability


class RoomAvailabilitySerializer(serializers.ModelSerializer):
    day_of_week_display = serializers.CharField(
        source="get_day_of_week_display", read_only=True
    )

    class Meta:  # type: ignore[misc]
        model = RoomAvailability
        fields = [
            "id",
            "room",
            "day_of_week",
            "day_of_week_display",
            "start_time",
            "end_time",
            "is_available",
        ]


class TagItemSerializer(serializers.ModelSerializer):
    class Meta:  # type: ignore[misc]
        model = TagItem
        fields = ["id", "tag", "room"]


class RoomTypeSerializer(serializers.ModelSerializer):
    class Meta:  # type: ignore[misc]
        model = RoomType
        fields = ["id", "type", "room"]


class RoomSerializer(serializers.ModelSerializer):
    tags = TagItemSerializer(many=True, required=False)
    room_type = RoomTypeSerializer(required=False)

    class Meta:  # type: ignore[misc]
        model = Rooms
        fields = [
            "id",
            "name",
            "excerpt",
            "description",
            "image",
            "capacity",
            "good_for",
            "created_at",
            "updated_at",
            "tags",
            "room_type",
        ]

    def create(self, validated_data):
        tags_data = validated_data.pop("tags", [])
        room_type_data = validated_data.pop("room_type", None)
        room = Rooms.objects.create(**validated_data)

        for tag_data in tags_data:
            TagItem.objects.create(room=room, **tag_data)

        if room_type_data:
            RoomType.objects.create(room=room, **room_type_data)

        default_start_time = time(9, 0)  # 9:00 AM
        default_end_time = time(17, 0)   # 5:00 PM
        
        for day in range(0, 7):  
            is_available = day not in [0, 6]
            RoomAvailability.objects.create(
                room=room,
                day_of_week=day,
                start_time=default_start_time,
                end_time=default_end_time,
                is_available=is_available
            )
        
        return room
