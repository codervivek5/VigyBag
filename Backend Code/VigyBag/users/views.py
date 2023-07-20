from django.shortcuts import render
from django.shortcuts import redirect
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
        email = request.data['email']
        print(email)
        password = request.data['password']

        if not email or not password:
            return Response({'status': 'failed', 'message': 'Please provide both email and password'}, status=status.HTTP_400_BAD_REQUEST)

        if CustomUser.objects.filter(email=email).exists():
            return Response({'status': 'failed', 'message': 'Email already exists'}, status=status.HTTP_400_BAD_REQUEST)

        new_user = CustomUser.objects.create_user(
            email=email, password=password)
        new_user.save()
        token, _ = Token.objects.get_or_create(user=new_user)
        serializer = UserSerializer(new_user)
        return Response({'status': 'success', 'data': serializer.data, 'token': str(token)}, status=status.HTTP_201_CREATED)


# allow posting to login view to get token

class LoginView(APIView):
    def post(self, request):
        email = request.data['email']

        print(email)
        password = request.data['password']
        print("This is email")
        if not email or not password:
            print("not email or not password")
            return Response({'status': 'failed', 'message': 'Please provide both email and password'}, status=status.HTTP_400_BAD_REQUEST)
        user = authenticate(email=email, password=password)
        if not user:
            print("not user")
            return Response({'status': 'failed', 'message': 'Invalid Credentials'}, status=status.HTTP_404_NOT_FOUND)

        token, _ = Token.objects.get_or_create(user=user)
        serializer = UserSerializer(user)
        print("serial", serializer)
        return Response({'status': 'success', 'data': serializer.data, 'token': str(token)}, status=status.HTTP_201_CREATED)
