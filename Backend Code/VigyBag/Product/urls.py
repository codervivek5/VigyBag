from django.contrib import admin
from django.urls import path,include
from Product import views

urlpatterns = [
    path('',views.product,name="contact")
]