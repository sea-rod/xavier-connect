from django.contrib import admin
from .models import CustomUser,Class,Stream,ClassStream

class ClassStreamInline(admin.TabularInline):
    model = ClassStream
    extra = 1  # Number of empty forms to display

class StreamAdmin(admin.ModelAdmin):
    inlines = [ClassStreamInline]

admin.site.register(CustomUser)
admin.site.register(Class)
admin.site.register(Stream,StreamAdmin)
admin.site.register(ClassStream)
