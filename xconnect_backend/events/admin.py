from django.contrib import admin
from .models import Event, SubEvent, College, Participant


class SubEventInline(admin.StackedInline):
    model = SubEvent
    extra = 1


class SubEventAdmin(admin.ModelAdmin):
    inlines = [SubEventInline]


admin.site.register(Event, SubEventAdmin)
admin.site.register(SubEvent)
admin.site.register(College)
admin.site.register(Participant)
