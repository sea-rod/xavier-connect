from django.contrib import admin
from .models import Books,Reservation,Fine

admin.site.register(Books)
admin.site.register(Reservation)
admin.site.register(Fine)
# Register your models here.

