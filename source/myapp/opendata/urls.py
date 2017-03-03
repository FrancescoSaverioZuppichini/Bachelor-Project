from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^display', views.opendata_display, name="opendata_display"),
    url(r'^api/locations',views.opendata_api_location, name="opendata_api_location"),
    url(r'^api/connections', views.opendata_api_connections, name="opendata_api_connections"),
    url(r'^api/stationboard', views.opendata_api_stationboard, name="opendata_api_stationboard"),
    url(r'^api/user/(?P<user_id>\d+)/preference', views.api_user_preference, name="api_user_preference"),
    url(r'^api/user/(?P<user_id>\d+)',views.api_user,name="api_user")

]