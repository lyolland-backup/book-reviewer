from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Review(models.Model):
    title = models.CharField(max_length=400)
    author = models.CharField(max_length=100)
    review = models.CharField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        User, related_name="reviews", on_delete=models.CASCADE, null=True)
