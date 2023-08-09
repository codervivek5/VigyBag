from django.shortcuts import render
from Product.models import Product

# Create your views here.
from .models import Product

def product(request):
    productinfo = Product.objects.first()
    
    # If there's no product in the database, you might get None. So, handle that case if necessary.
    if productinfo is None:
        context = {}
    else:
        discount = productinfo.MRP - productinfo.sellingprice
        colors = productinfo.colors.all() 
        sizes = productinfo.sizes.all()
        print(colors)
        context = {'product': productinfo, 'discount': discount, 'colors': colors,'sizes':sizes}
        
    return render(request, "product.html", context)

