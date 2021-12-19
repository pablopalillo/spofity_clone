from django.db import models
from podcasts.models import Podcast
from django.contrib.auth.models import User


class Favorite(models.Model):

    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    podcast = models.ForeignKey(
        Podcast,
        on_delete=models.CASCADE,
        related_name='podcasts'
    )

    def __str__(self):
        return f"Fav user {self.user.username} {self.id}"
