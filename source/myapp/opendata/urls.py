from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^/locations',views.opendata_api_location, name="opendata_api_location"),
    url(r'^/connections', views.opendata_api_connections, name="opendata_api_connections"),
    url(r'^/stationboard', views.opendata_api_opendata_api_stationboard, name="opendata_api_opendata_api_stationboard"),

]