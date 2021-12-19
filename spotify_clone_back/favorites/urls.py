from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register('favorites', views.FavoritesView, basename='favorite')

urlpatterns = [
   path('api/favorites/<int:pk>', views.FavoritesView.as_view({'get': 'retrieve'}), name="Retrieve Favorites")
]
