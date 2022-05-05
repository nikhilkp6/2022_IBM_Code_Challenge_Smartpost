from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.models import User
# Create your views here.

def sms(request):
    if(request.method == 'POST'):
        name = request.POST['name']
        address = request.POST['address']
        slot = request.POST['slot']
        consumer = User.objects.filter(c_name=name, c_address=address)
        contact_no = consumer.contact

        redirect('/sms-service')


    return render(request, 'sms.html')