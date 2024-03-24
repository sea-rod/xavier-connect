from rest_framework import permissions
from django.contrib.auth.models import Group

class IsTeacherOrIsUserReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.is_authenticated and request.method in permissions.SAFE_METHODS or request.user.is_superuser:
            return True
        return request.user.is_authenticated and request.user.group == Group.objects.get(name="teacher")
    
