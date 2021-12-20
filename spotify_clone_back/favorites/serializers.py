from rest_framework import serializers
from podcasts.serializers import PodcastSerializer
from users.serializers import UserSerializer
from .models import Favorite, Podcast, User


class FavoriteSerializer(serializers.ModelSerializer):

    podcast = PodcastSerializer()
    user = UserSerializer()

    class Meta:
        model = Favorite
        fields = ['id', 'user', 'podcast']
        read_only_fields = ['id']
        extra_kwargs = {'user': {'write_only': True}}


class FavoriteSaveSerializer(serializers.ModelSerializer):

    podcast = serializers.PrimaryKeyRelatedField(queryset=Podcast.objects.only("id"))
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.only("id"))

    class Meta:
        model = Favorite
        fields = ['id', 'user', 'podcast']
        read_only_fields = ['id']
