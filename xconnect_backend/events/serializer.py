from rest_framework import serializers
from .models import Event, SubEvent, Cordinator


class SubEventSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name="subevent-detail")
    event_id = serializers.PrimaryKeyRelatedField(queryset=Event.objects.none())

    class Meta:
        model = SubEvent
        fields = ("id", "event_id", "name", "desc", "no_of_participants", "url", "img","rules_n_judging")


class CordinatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cordinator
        fields = ("id", "name", "contact_no")


class EventSerializer(serializers.HyperlinkedModelSerializer):
    sub_event = SubEventSerializer(many=True, read_only=True)

    class Meta:
        model = Event
        fields = ("id", "name", "url", "sub_event", "brochure", "desc")

    def to_representation(self, instance):
        include_sub_events = self.context.get("include_sub_events", False)

        if include_sub_events:
            return super().to_representation(instance)
        else:
            data = super().to_representation(instance)
            data.pop("sub_event")
            return data
