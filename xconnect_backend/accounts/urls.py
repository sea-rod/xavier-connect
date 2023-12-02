from django.urls import path
from .views import (
    SignUpAPI,
    UpdateUserAPI,
    ChangePasswordAPI,
    ListCreateStreamAPI,
    StreamUpdateAPI,
    ClassListCreateAPI,
    ClassUpdateDeleteAPI,
    ClassStreamListAPI,
    ClassStreamDestroyAPI,
)

urlpatterns = [
    path("signup/", SignUpAPI.as_view(), name="signup"),
    path("<int:pk>/update/", UpdateUserAPI.as_view(), name="update_user"),
    path("change_password/", ChangePasswordAPI.as_view()),
    path("stream/", ListCreateStreamAPI.as_view()),
    path("<int:pk>/stream/", StreamUpdateAPI.as_view()),
    path("class/", ClassListCreateAPI.as_view()),
    path("<int:pk>/class", ClassUpdateDeleteAPI.as_view()),
    path("class-stream/", ClassStreamListAPI.as_view()),
    path("<int:pk>/class-stream/", ClassStreamDestroyAPI.as_view()),
]
