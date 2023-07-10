from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    username = models.CharField(max_length=200)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username

class Category(models.Model):
    name=models.CharField(max_length=100,null=True)
    def __str__(self):
        return self.name

class Product(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    name=models.CharField(max_length=200)
    price=models.IntegerField()
    description=models.TextField(max_length=500)
    category=models.ForeignKey(Category,on_delete=models.CASCADE,null=True)
    added_date=models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    
