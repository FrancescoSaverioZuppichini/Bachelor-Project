from django.db import models
import serpy
# Create your models here.

from django.db import models

class Station(models.Model):
    # name = models.CharField(max_length=124)
    opendataId = models.IntegerField(default=0)

class Bus(models.Model):
    number = models.IntegerField()

class User(models.Model):
    displayName = models.CharField(max_length=28)
    email = models.CharField(max_length=28)
    isNearby = models.BooleanField(default=False)

class Preference(models.Model):
    color = models.CharField(max_length=10)
    stations = models.ManyToManyField(Station)
    buses = models.ManyToManyField(Bus)
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)

class BusSerializer(serpy.Serializer):
    number = serpy.IntField()

class StationSerializer(serpy.Serializer):
    opendataId = serpy.IntField()

class UserSerializer(serpy.Serializer):
    displayName = serpy.StrField()
    email = serpy.StrField()

class PreferenceSerializer(serpy.Serializer):
    color = serpy.StrField()
    stations = StationSerializer()
    buses = BusSerializer()
    user = UserSerializer()
#
# class UserSerializer(serpy.Serializer):
#     displayName = serpy.StrField()
#     email = serpy.StrField()

# usefull stuff
# me.preference.buses.add(b1)
# me.preference.buses.all()
