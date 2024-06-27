from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.
class Color(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to='color_images/')
    
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
    rating = models.CharField(max_length=255)
    image = models.ImageField(upload_to='products/')
    info=models.CharField(max_length=2000)
    seller=models.CharField(max_length=100)
    features=RichTextField(blank=True)
    specifiactions=RichTextField(blank=True)
    sizes = models.ManyToManyField(Size)
    colors = models.ManyToManyField(Color)
    
    def __str__(self):
        return self.name
    
    
    