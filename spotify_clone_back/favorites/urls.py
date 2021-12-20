from django.urls import path

from . import views

urlpatterns = [
   path(
      'api/favorites/<int:pk>',
      views.FavoritesView.as_view({'get': 'retrieve'}),
      name="Retrieve Favorites"
   ),
   path(
      'api/favorite',
      views.FavoritesView.as_view({'post': 'create'}),
      name="Create Favorite"
   )
]
