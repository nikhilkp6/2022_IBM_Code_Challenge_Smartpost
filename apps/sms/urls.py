from django.urls import path, re_path
from . import views

urlpatterns = [
    path("/sms-service", views.sms, name="sms"),  # Homepage is the login screen
]