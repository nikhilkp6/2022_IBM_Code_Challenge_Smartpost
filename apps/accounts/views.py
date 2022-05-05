from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.models import User, auth

# Create your views here.

def login(request):

    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            print("User Authenticated")
            auth.login(request, user)
            return redirect('/dashboard')
        else:
            messages.info(request, "Invalid Username and Password")
            return redirect('/login')

    return render(request, 'index.html')


def logout(request):
    auth.logout(request)
    return redirect('/')

def register(request):
    if(request.method == 'POST'):
        postal_code = request.POST['postal_code']
        email = request.POST['email']
        username = request.POST['username']
        password1 = request.POST['password1']
        password2 = request.POST['password2']

        if password1 != password2 or User.objects.filter(username=username).exists() or User.objects.filter(email=email).exists() or username=="" or email=="" or password1=="" or password2=="":
            if User.objects.filter(username=username).exists():
                messages.info(request, "Username Already Taken")
            elif User.objects.filter(email=email).exists():
                messages.info(request, "Email Already Taken")
            elif username == "":
                messages.info(request, "Postal Code cannot be empty")
            elif email == "":
                messages.info(request, "Email cannot be empty")
            elif password1 == "" or password2=="":
                messages.info(request, "Password cannot be empty")
            else:
                messages.info(request, "Passwords not Matching")
            return redirect('register')
        else:
            user = User.objects.create_user(
                username=username, password=password1, email=email, first_name=postal_code)
            user.save()

        return redirect('/')
    else:
        return render(request, 'register.html')
