from django.urls import path, re_path
from . import views

urlpatterns = [
    path("/dashboard", views.dashboard, name="dashboard"),
]