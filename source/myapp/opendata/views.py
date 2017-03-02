from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.core import serializers
from django.shortcuts import render_to_response
import requests
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


def api_user(request):
    method = request.method
    if method == "GET":
        return HttpResponse("we")
    elif method == "POST":
        email = request.POST.get('email')
        displayName = request.POST.get('displayName')
        if(User.objects.filter(email=email)):
            return HttpResponse("user already exist")
        else:
            newUser = User(email=email,displayName=displayName)
            newUser.save()
            return HttpResponse(User.objects.filter(email=email))