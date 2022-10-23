from django.db import models

# Create your models here.

class AutobuxSerializers(models.Model):
    latitude = models.DecimalField(max_digits=20,decimal_places=17)
    longitud= models.DecimalField(max_digits=20,decimal_places=17)
    name = models.TextField(max_length=200)
    lastName = models.TextField(max_length=200)