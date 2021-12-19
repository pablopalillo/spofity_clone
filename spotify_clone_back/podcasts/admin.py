from django.contrib import admin
from .models import Podcast


class PodcastAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)


admin.site.register(Podcast, PodcastAdmin)
