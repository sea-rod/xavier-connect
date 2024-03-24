from rest_framework import permissions
from django.contrib.auth.models import Group

class IsLibraryStaff(permissions.BasePermission):
    def has_permission(self, request, view):
        if  request.user.is_authenticated and request.method in permissions.SAFE_METHODS :
            return True
        return (request.user.is_authenticated and request.user.group == Group.objects.get(name="library_staff")) or request.user.is_superuser
    

class IsReserverReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if (obj.user == request.user and request.method in permissions.SAFE_METHODS) or request.user.is_superuser:
            return True
        return request.user.is_authenticated and request.user.group == Group.objects.get(name="library_staff")

class IsStudent(permissions.BasePermission):
   def has_permission(self, request, view):
        if not request.user.is_authenticated:
            return False
        
        if request.user.group ==  Group.objects.get(name="student"):
            return True

        return False