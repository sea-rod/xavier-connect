from django import forms
from .models import SubEvent, Event,College


class EventPartForm(forms.Form):
    def __init__(self,event, *args, **kwargs):
        super(EventPartForm, self).__init__(*args, **kwargs)
        sub_events = SubEvent.objects.filter(event_id=event.id)
        for sub_event in sub_events:
            for part_num in range(sub_event.no_of_participants):
                field_name = f"part_{sub_event.name}_{part_num + 1}"
                self.fields[field_name] = forms.CharField(
                    label=f"Part {sub_event.name} {part_num + 1}"
                )


class CollegeRegisterForm(forms.ModelForm):
    class Meta:
        model = College
        fields = ("college_name","email")