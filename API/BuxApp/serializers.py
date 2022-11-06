from dataclasses import field
from rest_framework import serializers
from .models import AutobuxSerializers, CamionModel, Linea10Model


class AutobusSerializers(serializers.ModelSerializer):
    class Meta:
        model = AutobuxSerializers
        fields = ('latitude', 'longitud','name', 'lastName')

class CamionSerializers(serializers.ModelSerializer):
    class Meta:
        model = CamionModel
        fields = ('latitude', 'longitud')

class Linea10Serializers(serializers.ModelSerializer):
    class Meta:
        model = Linea10Model
        fields = ('latitude', 'longitude', 'horaViaje', 'fechaViaje', 'linea', 'distancia', 'ayudaPersonas', 'tiempoUtilizacion')

