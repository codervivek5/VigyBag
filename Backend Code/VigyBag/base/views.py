from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes, APIView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import generics, authentication, permissions
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import CreateUserSerializer
from .models import User


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
        check = User.objects.filter(email=res['email']).exists()
        if check:
            return Response({
                "message":"Email already registered"
            })
        else:
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
                return Response({
                    "message":"Invalid response"
                })
