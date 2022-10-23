from cgitb import reset
from .models import AutobuxSerializers
from rest_framework import viewsets, permissions
from .serializers import AutobusSerializers

class AutobusViewSet(viewsets.ModelViewSet):
    queryset = AutobuxSerializers.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = AutobusSerializers