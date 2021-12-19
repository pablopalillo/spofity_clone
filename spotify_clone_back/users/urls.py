from django.urls import path, include

from . import views
from rest_framework.authtoken import views as token_views

urlpatterns = [
   path('api/user', views.RegisterView.as_view()),
   path('api/register', views.RegisterView.as_view()),
   path('api/api-token-auth', token_views.obtain_auth_token),
   path('api/api-token-logout', views.LogoutView.as_view())
]