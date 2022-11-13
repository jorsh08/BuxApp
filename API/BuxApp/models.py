from django.db import models

# Create your models here.

class AutobuxSerializers(models.Model):
    latitude = models.DecimalField(max_digits=20,decimal_places=17)
    longitud= models.DecimalField(max_digits=20,decimal_places=17)
    name = models.TextField(max_length=200)
    lastName = models.TextField(max_length=200)

class AutobusesSerializers(models.Model):
    latitude = models.DecimalField(max_digits=20,decimal_places=17)
    longitud= models.DecimalField(max_digits=20,decimal_places=17)

class CamionModel(models.Model):
    latitude = models.DecimalField(max_digits=20,decimal_places=17)
    longitud= models.DecimalField(max_digits=20,decimal_places=17)

class Linea10Model(models.Model):
    id = models.AutoField(primary_key=True)
    latitude = models.DecimalField(max_digits=20,decimal_places=17)
    longitude = models.DecimalField(max_digits=20,decimal_places=17)
    horaViaje = models.TimeField(auto_now_add=True)
    fechaViaje = models.DateField()
    linea = models.TextField(max_length=20)
    distancia = models.DecimalField(max_digits=4,decimal_places=1)
    personasAbordo = models.DecimalField(max_digits=3,decimal_places=0)
    tiempoUtilizacion = models.DecimalField(max_digits=3,decimal_places=0)

class ViajesModel(models.Model):
    fechaViaje = models.DateField()
    horaViaje = models.TimeField(auto_now_add=True)
    linea = models.TextField(max_length=20)