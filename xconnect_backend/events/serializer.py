from rest_framework import serializers
from .models import Event,SubEvent


class SubEventSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name="subevent-detail")
    class Meta:
        model = SubEvent
        fields = ("id","event_id","name","desc","no_of_participants","url")

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