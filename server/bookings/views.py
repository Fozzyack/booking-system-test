from rest_framework import viewsets

from .models import Bookings
from .serializers import BookingSerializer

# Create your views here.

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Bookings.objects.all()
    serializer_class = BookingSerializer

