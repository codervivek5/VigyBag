from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    # Your custom fields and methods here

    username = models.CharField(max_length=200)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username

    class Meta(AbstractUser.Meta):
        pass

    # Define related names for groups and user permissions
    groups = models.ManyToManyField(
        'auth.Group',
        verbose_name='groups',
        blank=True,
        related_name='base_user_groups',
        related_query_name='base_user_group',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        verbose_name='user permissions',
        blank=True,
        related_name='base_user_permissions',
        related_query_name='base_user_permission',
    )

    # Define any additional fields or methods as needed
