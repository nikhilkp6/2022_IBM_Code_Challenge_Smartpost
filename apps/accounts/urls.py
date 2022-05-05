from django.urls import path, re_path
from . import views

urlpatterns = [
    path("", views.login, name="login"),
    path("register", views.register, name='register'),
    re_path("login", views.login, name='login'),
    path("logout", views.logout, name='logout'),
]