from rest_framework import generics
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from .models import Podcast
from .serializers import PodcastSerializer


class PodcastList(generics.ListCreateAPIView):

    queryset = Podcast.objects.all()
    serializer_class = PodcastSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
