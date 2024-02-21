from django.urls import path,include
from rest_framework import routers
from .views import EventViewSet,SubEventDetailsAPI
from .views import Register,RegisterSubEvent,RegisterSuccessful


router = routers.DefaultRouter()
router.register(r'event', EventViewSet)
router.register(r"sub-event",SubEventDetailsAPI)
urlpatterns = [
    path("", include(router.urls)),
    path("register/<int:pk>/", Register.as_view(), name="register_participants"),
    path("register-sub/<str:token>/", RegisterSubEvent.as_view(), name="register_sub"),
    path("successful/<str:event>",RegisterSuccessful.as_view(),name="regis_success"),
    # path("<int:pk>/",EventDetailsAPI.as_view(),name="event-detail"),
    # path("sub-event/<int:pk>/",SubEventDetailsAPI.as_view(),name="sub-event-detail"),
]
