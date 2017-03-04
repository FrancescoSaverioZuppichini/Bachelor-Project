from django.db import models
import serpy
from rest_framework import serializers

# Create your models here.

from django.db import models


class Station(models.Model):
    # name = models.CharField(max_length=124)
    opendata = models.IntegerField(default=0)


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


class BusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bus
        fields = ('number')

class StationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Station
        fields = ('opendata')

class PreferenceSerializer(serializers.ModelSerializer):
    stations = StationSerializer(many=True, read_only=True)
    buses = BusSerializer(many=True, read_only=True)
    class Meta:
        model = Preference
        fields = ('buses','stations','color')


class UserSerializer(serializers.ModelSerializer):
    preference = PreferenceSerializer()

    class Meta:
        model = User
        fields = ('displayName', 'email','preference')

#
# class UserSerializer(serpy.Serializer):
#     displayName = serpy.StrField()
#     email = serpy.StrField()

# usefull stuff
# me.preference.buses.add(b1)
# me.preference.buses.all()
