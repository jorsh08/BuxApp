from cgitb import reset
from .models import AutobuxSerializers, CamionModel, Linea10Model, ViajesModel
from rest_framework import viewsets, permissions
from .serializers import AutobusSerializers, CamionSerializers, Linea10Serializers, ViajesSerializers

class AutobusViewSet(viewsets.ModelViewSet):
    queryset = AutobuxSerializers.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = AutobusSerializers

class CamionViewSet(viewsets.ModelViewSet):
    queryset = CamionModel.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = CamionSerializers

class Linea10ViewSet(viewsets.ModelViewSet):
    queryset = Linea10Model.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = Linea10Serializers

class ViajesViewSet(viewsets.ModelViewSet):
    queryset = ViajesModel.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ViajesSerializers