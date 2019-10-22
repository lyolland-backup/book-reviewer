from reviews.models import Review
from rest_framework import viewsets, permissions
from .serializers import ReviewSerializer

# viewset for reviews for crud


class ReviewViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = ReviewSerializer

    def get_query_set(self):
        return self.request.user.reviews.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
