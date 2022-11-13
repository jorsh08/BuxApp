from dataclasses import field
from rest_framework import serializers
from .models import AutobuxSerializers, CamionModel, Linea10Model, ViajesModel


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
        fields = ("id",'latitude', 'longitude', 'horaViaje', 'fechaViaje', 'linea', 'distancia', 'personasAbordo', 'tiempoUtilizacion')

class ViajesSerializers(serializers.ModelSerializer):
    class Meta:
        model = ViajesModel
        fields = ('id', 'fechaViaje', 'horaViaje', 'linea')