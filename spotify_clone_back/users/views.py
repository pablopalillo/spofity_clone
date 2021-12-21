from django.contrib.auth.models import User
from django.http import Http404
from django.core.exceptions import ObjectDoesNotExist

from rest_framework import permissions
from rest_framework.authentication import TokenAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import UserSerializer


class RegisterView(APIView):

    permission_classes = [permissions.AllowAny]

    def post(self, request):

        try:
            user_serializer = UserSerializer(data=request.data)
            if user_serializer.is_valid(raise_exception=True):

                User.objects.create_user(
                    username=request.data['username'],
                    email=request.data['email'],
                    password=request.data['password']
                )

                return Response(user_serializer.data, status.HTTP_201_CREATED)

        except ObjectDoesNotExist:
            raise Http404


class LogoutView(APIView):

    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):

        try:
            request.user.auth_token.delete()
            return Response(status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            raise Http404


class LoggedUserView(APIView):

    """ User data information.    """
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):

        try:
            user_serializer = UserSerializer(request.user).data
            return Response(user_serializer, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            raise Http404
