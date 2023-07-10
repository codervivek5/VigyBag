from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import  User, Category,Product


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email','username','password']

class UserSigninSerializer(serializers.Serializer):
    email = serializers.CharField(required=True)
    password = serializers.CharField(required=True)
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields= ['name']
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields= '__all__'

