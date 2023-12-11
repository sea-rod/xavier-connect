from rest_framework import serializers
from .models import Event,SubEvent


class SubEventSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name="sub-event-detail")
    class Meta:
        model = SubEvent
        fields = ("id","url","no_of_participants")

class EventSerializer(serializers.HyperlinkedModelSerializer):
    sub_event = SubEventSerializer(many=True, read_only=True)
    class Meta:
        model = Event
        fields = ("id","name","url","sub_event")
    def to_representation(self, instance):
        include_sub_events = self.context.get('include_sub_events', False)

        if include_sub_events:
            return super().to_representation(instance)
        else:
            data = super().to_representation(instance)
            data.pop('sub_event')
            return data