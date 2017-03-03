from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.core import serializers
from django.shortcuts import render_to_response
from preserialize.serialize import serialize
from django.http import QueryDict
import requests
from opendata.models import *
from opendata.models import User
import json

def opendata_display(request):
    method = request.method
    if method == "GET":
        return render(request,"./opendata/opendataDisplay/dist/index.html")

def opendata_api_location(request):
    method = request.method
    if method == "GET":
        print(request.GET)
        connectionsReq = requests.get('http://transport.opendata.ch/v1/locations', params=request.GET)
        print(connectionsReq.text)
        return HttpResponse(connectionsReq.text, content_type="application/json")

def opendata_api_connections(request):
    method = request.method
    if method == "GET":
        connectionsReq = requests.get('http://transport.opendata.ch/v1/connections', params=request.GET)
        return HttpResponse(connectionsReq.text, content_type="application/json")

def opendata_api_stationboard(request):
    method = request.method
    if method == "GET":
        connectionsReq = requests.get('http://transport.opendata.ch/v1/stationboard', params=request.GET)
        return HttpResponse(connectionsReq.text, content_type="application/json")


def api_user(request,user_id):
    method = request.method
    if method == "GET":
        print(user_id)
        user  = User.objects.get(pk=user_id)

        return HttpResponse(serializers.serialize('json',[user]),content_type="application/json")
    elif method == "PUT":
        body = QueryDict(request.body)
        email = body.get('email')
        displayName = body.get('displayName')
        if (email == None):
            return HttpResponse("Email cannot be empty", status=400)

        user = User.objects.filter(email=email)

        if(user == None):
            return HttpResponse("User not found.", status=404)
        # update the user
        user.update(displayName=displayName)
        return HttpResponse(serializers.serialize('json',User.objects.filter(email=email)),content_type="application/json")

    elif method == "POST":
        displayName = request.POST.get('displayName')
        email = request.POST.get('email')
        # if user already exist
        if (email == None):
            return HttpResponse("Email cannot be empty", status=400)
        if(User.objects.filter(email=email)):
            return HttpResponse("User already exist.", status=403)
        # create a new one
        else:
            newUser = User(email=email,displayName=displayName)
            newUser.save()
            return HttpResponse(serializers.serialize('json',User.objects.filter(email=email)),content_type="application/json")


def api_user_preference(request,user_id):

    method = request.method
    if method == "GET":
        User.objects.all().delete()
        Station.objects.all().delete()
        Preference.objects.all().delete()
        Bus.objects.all().delete()
        u = User(email="dio", displayName="dio")
        p = Preference(user=u)
        b = Bus(number=5)
        s = Station(opendataId="8595133")
        u.save()
        b.save()
        s.save()
        p.save()
        p.buses.add(b)
        p.stations.add(s)
        print(u.pk)
        email = request.GET.get('email')
        user = User.objects.get(pk=user_id)

        # print(UserSerializer(user).data)

        return HttpResponse(serializers.serialize('json', [user.preference],use_natural_foreign_keys=False, use_natural_primary_keys=True),content_type="application/json")