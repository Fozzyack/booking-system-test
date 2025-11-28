from rest_framework import serializers
from .models import Rooms, TagItem


class TagItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = TagItem
        fields = ['id', 'tag', 'room']


class RoomSerializer(serializers.ModelSerializer):
    tags = TagItemSerializer(many=True, required=False)
    
    class Meta:
        model = Rooms
        fields = ['id', 'name', 'description', 'image', 'created_at', 'updated_at', 'tags']
    
    def create(self, validated_data):
        tags_data = validated_data.pop('tags', [])
        room = Rooms.objects.create(**validated_data)
        
        for tag_data in tags_data:
            TagItem.objects.create(room=room, **tag_data)
        
        return room

