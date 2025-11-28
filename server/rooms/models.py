from django.db import models

class Rooms(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    image = models.ImageField(upload_to="rooms-images", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name

class TagItem(models.Model):
    tag = models.CharField(max_length=20)
    room = models.ForeignKey(Rooms, on_delete=models.CASCADE, related_name='tags')
    
    def __str__(self):
        return self.tag
