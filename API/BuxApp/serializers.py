from dataclasses import field
from rest_framework import serializers
from .models import AutobuxSerializers, CamionModel


class AutobusSerializers(serializers.ModelSerializer):
    class Meta:
        model = AutobuxSerializers
        fields = ('latitude', 'longitud','name', 'lastName')

class CamionSerializers(serializers.ModelSerializer):
    class Meta:
        model = CamionModel
        fields = ('latitude', 'longitud')

