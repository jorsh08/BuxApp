from dataclasses import field
from rest_framework import serializers
from .models import AutobuxSerializers


class AutobusSerializers(serializers.ModelSerializer):
    class Meta:
        model = AutobuxSerializers
        fields = ('latitude', 'longitud','name', 'lastName')