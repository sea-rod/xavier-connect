from django.contrib import admin
from .models import Books ,Genre,Reservation,Fine

admin.site.register(Genre)
admin.site.register(Books)
admin.site.register(Reservation)
admin.site.register(Fine)
# Register your models here.

