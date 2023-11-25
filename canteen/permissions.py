from rest_framework import permissions
from django.contrib.auth.models import Group


class IsCanteenStaff(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user.group == Group.objects.get(name="canteen_staff")
