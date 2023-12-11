from rest_framework import permissions
from django.contrib.auth.models import Group
from .models import Event,SubEvent


class IsTeacher(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        if  request.user.is_authenticated:
            return  request.user.group == Group.objects.get(name="teacher") or request.user.is_staff
        return False
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        if isinstance(obj,Event):
            return request.user == obj.user_id
        return request.user == obj.event_id.user_id
        return False

