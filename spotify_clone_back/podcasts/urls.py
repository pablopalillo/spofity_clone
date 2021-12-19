from django.urls import path

from . import views

urlpatterns = [
   path('api/podcasts', views.PodcastList.as_view())
]
