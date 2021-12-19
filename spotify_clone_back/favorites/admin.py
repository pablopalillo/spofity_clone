from django.contrib import admin
from .models import Favorite


class FavoriteAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)


admin.site.register(Favorite, FavoriteAdmin)
