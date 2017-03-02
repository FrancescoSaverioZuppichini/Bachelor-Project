from django.db import models

# Create your models here.

from django.db import models

class User(models.Model):
    displayName = models.CharField(max_length=28)
    email = models.CharField(max_length=28)
