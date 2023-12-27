from django.urls import path,include
from rest_framework import routers
from .views import EventViewSet,SubEventDetailsAPI
from .views import Register,RegisterSubEvent


router = routers.DefaultRouter()
router.register(r'event', EventViewSet)
router.register(r"sub-event",SubEventDetailsAPI)
urlpatterns = [
    path("", include(router.urls)),
    path("register/<int:pk>/", Register.as_view(), name="register_participants"),
    path("register-sub/<str:token>/", RegisterSubEvent.as_view(), name="register_sub"),
    # path("",EventCreateAPI.as_view()),
    # path("<int:pk>/",EventDetailsAPI.as_view(),name="event-detail"),
    # path("sub-event/<int:pk>/",SubEventDetailsAPI.as_view(),name="sub-event-detail"),
]
