from django.db import models


class Podcast(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=150)
    description = models.TextField(null=True)
    author = models.CharField(max_length=45, null=True)
    create_date = models.DateField()

    def __str__(self):
        return self.name
