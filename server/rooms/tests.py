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
