from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$',views.api_index, name="api_index")
]