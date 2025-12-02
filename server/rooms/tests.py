from django.test import TestCase
from .models import Rooms, RoomType, TagItem


class RoomsModelTest(TestCase):
    # Create a test room
    def setUp(self):
        self.room = Rooms.objects.create(
            name="Test Room",
            excerpt="A test room excerpt",
            description="Full description",
            good_for="meetings",
            capacity=10
        )

    def test_room_creation(self):
        self.assertEqual(self.room.name, "Test Room")
        self.assertEqual(self.room.capacity, 10)
        self.assertEqual(self.room.good_for, "meetings")

    def test_return_string_for_room(self):
        self.assertEqual(str(self.room), "Test Room")

    def test_room_type_relationship(self):
        """Test one-to-one relationship with RoomType"""
        room_type = RoomType.objects.create(
            type="Conference",
            room=self.room
        )
        self.assertEqual(self.room.room_type.type, "Conference")
