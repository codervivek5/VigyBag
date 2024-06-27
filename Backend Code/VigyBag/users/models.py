from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone
USER_TYPE_CHOICES = (
        (1, 'CUSTOMER'),

    )

class UserManager(BaseUserManager):

    def create_user(self, email, password=None, is_staff=False, is_superuser=False):
        if not email:
            raise ValueError('Users must have an email address')
        now = timezone.localtime(timezone.now())
        email=self.normalize_email(email)
        user = self.model(
            email=email,
            is_staff=is_staff,
            is_active=True,
            is_superuser=is_superuser,
            last_login=now,
        
        )
        user.set_password(password)
        user.save(using=self._db)
        return user
   
    def create_superuser(self, email, password, **extra_fields):
        user = self.create_user(email, password, True, True, **extra_fields)
        user.admin = True
        user.save(using=self._db)
        return user
    
    
class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=254, unique=True)
    name = models.CharField(max_length=254, null=True, blank=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    last_login = models.DateTimeField(null=True, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)


    user_type = models.PositiveSmallIntegerField(choices=USER_TYPE_CHOICES, default=1)

    USERNAME_FIELD = 'email'

    objects = UserManager()
