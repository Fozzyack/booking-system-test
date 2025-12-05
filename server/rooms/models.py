from django.db import models


class Rooms(models.Model):
    name = models.CharField(max_length=30)
    excerpt = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    image = models.ImageField(upload_to="", blank=True, null=True)
    good_for = models.CharField(max_length=20)
    capacity = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class DayOfWeek(models.IntegerChoices):
    SUNDAY = 0, "Sunday"
    MONDAY = 1, "Monday"
    TUESDAY = 2, "Tuesday"
    WEDNESDAY = 3, "Wednesday"
    THURSDAY = 4, "Thursday"
    FRIDAY = 5, "Friday"
    SATURDAY = 6, "Saturday"


class RoomAvailability(models.Model):
    room = models.ForeignKey(
        Rooms, on_delete=models.CASCADE, related_name="availability"
    )
    day_of_week = models.IntegerField(choices=DayOfWeek.choices)
    start_time = models.TimeField()
    end_time = models.TimeField()
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.room.name} - {self.get_day_of_week_display()} {self.start_time}-{self.end_time}"


class RoomType(models.Model):
    type = models.CharField(max_length=20)
    room = models.OneToOneField(
        Rooms, on_delete=models.CASCADE, related_name="room_type"
    )


class TagItem(models.Model):
    tag = models.CharField(max_length=20)
    room = models.ForeignKey(Rooms, on_delete=models.CASCADE, related_name="tags")

    def __str__(self):
        return self.tag
