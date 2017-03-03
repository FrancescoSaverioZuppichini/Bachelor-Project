from django.db import models

# Create your models here.

from django.db import models

class User(models.Model):
    displayName = models.CharField(max_length=28)
    email = models.CharField(max_length=28)

class UserPreference(models.Model):
    userId = models.ForeignKey(User,on_delete=models.CASCADE)
    stations = models.ForeignKey(User,on_delete=models.CASCADE)
    color = models.CharField(max_length=10)
    buses = models.ForeignKey(User,on_delete=models.CASCADE)