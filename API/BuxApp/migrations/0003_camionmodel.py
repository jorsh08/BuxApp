# Generated by Django 4.1.2 on 2022-10-29 03:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BuxApp', '0002_autobusesserializers'),
    ]

    operations = [
        migrations.CreateModel(
            name='CamionModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('latitude', models.DecimalField(decimal_places=17, max_digits=20)),
                ('longitud', models.DecimalField(decimal_places=17, max_digits=20)),
            ],
        ),
    ]
