from rest_framework import serializers
from .models import CustomUser
from django.contrib.auth import authenticate

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=CustomUser
        fields=['id','email','password','user_type','last_login']
    
             
              