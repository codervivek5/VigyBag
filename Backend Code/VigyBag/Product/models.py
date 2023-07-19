from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    location = models.CharField(max_length=100)
    rating = models.DecimalField(max_digits=5,decimal_places=1)
    image = models.ImageField(upload_to='products/')
    
    def __str__(self):
        return self.name
    
    
    