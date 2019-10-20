from django.db import models

# Create your models here.
class Review(models.Model):
    title = models.CharField(max_length=400, unique=True)
    author = models.CharField(max_length=100)
    review = models.CharField(max_length=1000)
    create_at = models.DateTimeField(auto_now_add=True)
