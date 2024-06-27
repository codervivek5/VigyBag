from django.shortcuts import render
from Product.models import Product,Color

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
        
        if colors:
           first_color = colors.first()
           if first_color:
              first_color_image_url = first_color.image.url
           else:
               first_color_image_url = None
        else:
             first_color_image_url = None
        
        context = {'product': productinfo, 'discount': discount, 'colors': colors,'sizes':sizes, 'default_image': first_color_image_url or productinfo.image.url}
        
    return render(request, "product.html", context)
# def product(request):
#     productinfo = Product.objects.first()

#     # If there's no product in the database, handle that case.
#     if productinfo is None:
#         context = {}
#     else:
#         discount = productinfo.MRP - productinfo.sellingprice
#         colors = productinfo.colors.all()
#         sizes = productinfo.sizes.all()
        
#         # Fetch the image for the first color.
#         first_color_image_url = None
#         if colors:
#             first_color = colors.first()
#             product_color_instance = Color.objects.filter(product=productinfo, color=first_color).first()
#             if product_color_instance:
#                 first_color_image_url = product_color_instance.image.url

#         context = {
#             'product': productinfo, 
#             'discount': discount, 
#             'colors': colors,
#             'sizes': sizes,
#             'default_image': first_color_image_url or productinfo.image.url  # Default to product's image if first color's image is not found
#         }
        
#     return render(request, "product.html", context)

