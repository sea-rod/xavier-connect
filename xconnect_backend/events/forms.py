from django import forms
from .models import SubEvent, Event, College


from django import forms


class EventPartForm(forms.Form):
    def __init__(self, event, *args, **kwargs):
        super(EventPartForm, self).__init__(*args, **kwargs)
        sub_events = SubEvent.objects.filter(event_id=event.id)

        for sub_event in sub_events:
            for part_num in range(sub_event.no_of_participants):
                field_name = f"part_{sub_event.name}_{part_num+1}"
                label = f"{sub_event.name}" if part_num == 0 else ""

                self.fields[field_name] = forms.CharField(
                    label=label,
                    widget=forms.TextInput(
                        attrs={
                            "class": "form-control",
                            "placeholder": f"participant {part_num+1}",
                        }
                    ),
                    required=False,
                )


class CollegeRegisterForm(forms.ModelForm):
    college_name = forms.CharField(
        widget=forms.TextInput(
            attrs={
                "class": "form-control",
                "placeholder": "College Name",
            }
        )
    )

    email = forms.EmailField(
        widget=forms.TextInput(
            attrs={
                "class": "form-control",
                "placeholder": "Email",
            }
        )
    )

    class Meta:
        model = College
        fields = ("college_name", "email")
