from django.shortcuts import render
from Contact.models import Contact

# Create your views here.
def contact(request):
    if( request.method=="POST" ):
        name=request.POST["name"]
        email=request.POST["email"]
        message=request.POST["message"]
        instance=Contact(name=name,email=email,message=message)
        instance.save()
    
    return render(request,"")