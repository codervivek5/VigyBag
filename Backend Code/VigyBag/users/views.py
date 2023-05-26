from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.authtoken.models import Token
from .models import *
from .serializers import *
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

class RegisterView(APIView):
    def post(self, request):
        email=request.data['email']
        if CustomUser.objects.filter(email=email).exists():
            return Response({'status':'failed','message':'Email already exists'},status=status.HTTP_400_BAD_REQUEST)
        serializer = RegisterUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            new_user = CustomUser.objects.get(email=serializer.data['email'])
            token,_ = Token.objects.get_or_create(user=new_user)
            return Response({'status':'success','data':serializer.data,'token':str(token)},status=status.HTTP_201_CREATED)
            
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

#allow posting to login view to get token

class LoginView(APIView):
    def post(self,request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            print(1)
            user = serializer.validated_data['user']
            token,_ = Token.objects.get_or_create(user=user)
            return Response({'status':'success','data':serializer.data,'token':str(token)},status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)