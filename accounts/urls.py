from django.urls import path
from .views import SignUpAPI, UpdateUserAPI, ChangePasswordAPI

urlpatterns = [
    path("signup/", SignUpAPI.as_view(), name="signup"),
    path("<int:pk>/update/", UpdateUserAPI.as_view(), name="update_user"),
    path("change_password/", ChangePasswordAPI.as_view()),
]
