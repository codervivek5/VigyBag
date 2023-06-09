from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes, APIView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import generics, authentication, permissions
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import CreateUserSerializer, UserSigninSerializer
from .models import User
from rest_framework.status import (
    HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND
)

@api_view(['GET'])
def getRoutes(request):
    routes=[
        '/api/token',
        '/api/token/refresh',
    ]

    return Response(routes)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer    

@permission_classes([AllowAny,])
class Register(generics.GenericAPIView):
    serializer_class = CreateUserSerializer

    def post(self,request,*args,**kwargs):
        res = request.data
        serializer = self.get_serializer(data=res)
        if serializer.is_valid():
            serializer.save()
            valid_user = User.objects.get(email=res['email'])
            access_token = MyTokenObtainPairSerializer().get_token(valid_user)
            return Response({
                "user":serializer.data,
                "access_token":str(access_token.access_token),
                "refresh_token":str(access_token),
                "status":200
            })
        else:
            return Response(serializer.errors,status=HTTP_400_BAD_REQUEST)
    

@permission_classes([AllowAny,])
class login(generics.GenericAPIView):
    serializer_class = UserSigninSerializer
    def post(self,request,*args,**kwargs):
        login_serializer = self.get_serializer(data=request.data)
        if not login_serializer.is_valid():
            return Response(
                login_serializer.errors,status = HTTP_400_BAD_REQUEST
            )
        else:
            check = User.objects.filter(email = login_serializer.data['email']).exists()
            if check==False:
                return Response({
                    "message":"Email is not registered"
                })
            else:
                user = User.objects.get(email = login_serializer.data['email'])
                if user.password != login_serializer.data['password']:
                    return Response({
                        "message":"Invalid Password"
                    })
                else:
                    access_token = MyTokenObtainPairSerializer().get_token(user)
                    return Response({
                        "user":login_serializer.data,
                        "access_token":str(access_token.access_token),
                        "refresh_token":str(access_token),
                        "status":200
                    })
