from django.db import models

# Create your models here.
class Consumer(models.Model):
    c_name = models.CharField(max_length="50", blank="False", null="False")
    c_address = models.TextField(max_length="500", blank="False", null="False")
    c_location = models.CharField(max_length="50", blank="False", null="False")
    c_contact = models.BigIntegerField(max_length="10", blank="False", null="False")
