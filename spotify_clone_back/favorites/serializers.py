from rest_framework import serializers
from podcasts.serializers import PodcastSerializer
from users.serializers import UserSerializer
from .models import Favorite


class FavoriteSerializer(serializers.ModelSerializer):

    podcast = PodcastSerializer(read_only=True)

    class Meta:
        model = Favorite
        exclude = ['user']
        read_only_fields = ['id']
