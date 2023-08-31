from django.shortcuts import render
from django.http import HttpResponse
from .models import Room

# Create your views here.


def home(request):
    rooms = Room.objects.all()
    context = {'rooms': rooms}
    return render(request, "home.html")


def room(request):
    return render(request, "room.html")
