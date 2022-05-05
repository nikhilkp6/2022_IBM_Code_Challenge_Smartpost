from django.contrib import messages
from django.shortcuts import render, redirect
from .models import Consumer

# Create your views here.
def dashboard(request): 
    if(request.method == 'POST'):
        name = request.POST['name']
        address = request.POST['address']
        location = request.POST['location']
        contact = request.POST['contact']

        if Consumer.objects.filter(c_address=address).exists() or Consumer.objects.filter(c_location=location).exists() or Consumer.objects.filter(c_contact=contact).exists() or name=="" or address=="" or location=="" or contact=="":
            if(name=="" or address=="" or location=="" or contact==""):
                messages.info(request, "Name/Address/Location/Contact cannot be empty")
            else:
                messages.info(request, "Consumer already exists!")
            redirect("/dashboard")
        else:
            consumer = Consumer(
                c_name=name, c_address=address, c_location=location, c_contact=contact)
            consumer.save()

    return render(request, 'dashboard.html')
