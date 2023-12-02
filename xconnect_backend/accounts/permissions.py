from rest_framework.permissions import BasePermission, IsAdminUser
from rest_framework import permissions


class IsUser(BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user == obj


class EditOnlyByAdmin(BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return bool(request.user and request.user.is_staff)
