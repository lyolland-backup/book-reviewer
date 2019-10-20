from rest_framework import serializers
from reviews.models import Review

# serializer for Reviews
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'