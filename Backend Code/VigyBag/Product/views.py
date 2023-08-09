from django.shortcuts import render
from Product.models import Product

# Create your views here.
from .models import Product

def product(request):
    return render(request, "product.html")
