from django.shortcuts import render
from Product.models import Product

# Create your views here.
def get_product_info(request):
    products = Product.objects.all()
    context = {
        'products': products,
    }
    return render(request, 'trial.html', context)