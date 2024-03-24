from rest_framework import permissions
from django.contrib.auth.models import Group

class IsTeacherOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.group == Group.objects.get(name="teacher")