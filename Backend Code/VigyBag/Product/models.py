from django.db import models

# Create your models here.
class Color(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name

class Size(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name
    
class Product(models.Model):
    name = models.CharField(max_length=100)
    sellingprice = models.DecimalField(max_digits=8, decimal_places=2)
    MRP=models.DecimalField(max_digits=8,decimal_places=2)
    location = models.CharField(max_length=100)
    stars = models.DecimalField(max_digits=5,decimal_places=1)
    rating=models.DecimalField(max_digits=8, decimal_places=2)
    image = models.ImageField(upload_to='products/')
    sizes = models.ManyToManyField(Size)
    colors = models.ManyToManyField(Color)
    
    def __str__(self):
        return self.name
    
    
    