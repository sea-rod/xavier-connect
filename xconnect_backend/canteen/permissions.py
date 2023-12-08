from rest_framework import permissions
from django.contrib.auth.models import Group


class IsCanteenStaff(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS or request.user.is_superuser:
            return True
        return request.user.group == Group.objects.get(name="canteen_staff")

class IsUser(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.user_id == request.user

class IsCartUser(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.cart_id.user_id == request.user