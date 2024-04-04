from rest_framework import serializers
from .models import Event, SubEvent, Cordinator
import bleach


class CordinatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cordinator
        fields = ("id", "name", "contact_no")


class SubEventSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name="subevent-detail")
    event_id = serializers.PrimaryKeyRelatedField(queryset=Event.objects.all())
    cordinator = CordinatorSerializer(
        read_only=True, many=True, source="cordinator_set"
    )

    class Meta:
        model = SubEvent
        fields = (
            "id",
            "event_id",
            "name",
            "desc",
            "no_of_participants",
            "url",
            "img",
            "rules_n_judging",
            "cordinator",
        )

    def validate(self, attrs):
        content = attrs.get("rules_n_judging")
        content = bleach.clean(
            content,
            tags=bleach.sanitizer.ALLOWED_TAGS,
            attributes=bleach.sanitizer.ALLOWED_ATTRIBUTES,
        )
        attrs["rules_n_judging"] = content
        return super().validate(attrs)


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
