from django.http import Http404
from django.core.exceptions import ObjectDoesNotExist

from rest_framework import permissions
from rest_framework import status
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response

from .models import Favorite
from .serializers import FavoriteSerializer, FavoriteSaveSerializer


class FavoritesView(viewsets.ViewSet):

    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def retrieve(self, request, pk):

        try:

            queryset = Favorite.objects.filter(user__id=pk)
            serializer = FavoriteSerializer(queryset, many=True)
            return Response(serializer.data)

        except ObjectDoesNotExist:
            raise Http404

    def create(self, request):

        favorite_serializer = FavoriteSaveSerializer(data=request.data)
        if favorite_serializer.is_valid(raise_exception=True):
            favorite_serializer.save()
            return Response(status.HTTP_201_CREATED)
        return Response(status.HTTP_400_BAD_REQUEST)
