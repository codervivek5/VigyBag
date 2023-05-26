from rest_framework import serializers
from .models import CustomUser
from django.contrib.auth import authenticate

class RegisterUserSerializer(serializers.ModelSerializer):
    email=serializers.EmailField(max_length=255)
    password=serializers.CharField(max_length=128,write_only=True)

    class Meta:
        model = CustomUser
        fields = ('email', 'password')  
        #have to add usertype ,default customer
    
    def create(self, validated_data):
        user = CustomUser.objects.create_user(email=validated_data['email'], password=validated_data['password'])
        return user
    
class LoginSerializer(serializers.ModelSerializer):
    email=serializers.EmailField(max_length=255)
    password=serializers.CharField(max_length=128,write_only=True)
    class Meta:
        model = CustomUser
        fields = ('email', 'password')

    def validate(self, data):
        email=data.get('email', None)
        password=data.get('password', None)
        if email and password:
            user=authenticate(email=email, password=password)
            print(1234)
            if user:
                data['user']=user

                return data

            else:
                raise serializers.ValidationError('Incorrect Credentials')
            

        else:
            raise serializers.ValidationError('Must provide email and password')
             
              