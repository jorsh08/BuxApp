from cgitb import reset
from .models import AutobuxSerializers, CamionModel
from rest_framework import viewsets, permissions
from .serializers import AutobusSerializers, CamionSerializers

class AutobusViewSet(viewsets.ModelViewSet):
    queryset = AutobuxSerializers.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = AutobusSerializers

class CamionViewSet(viewsets.ModelViewSet):
    queryset = CamionModel.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = CamionSerializers