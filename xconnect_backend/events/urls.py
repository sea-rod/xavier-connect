from django.urls import path,include
from rest_framework import routers
from .views import EventViewSet,SubEventDetailsAPI


router = routers.DefaultRouter()
router.register(r'event', EventViewSet)
router.register(r"sub-event",SubEventDetailsAPI)
urlpatterns=[
    path('', include(router.urls)),
    # path("",EventCreateAPI.as_view()),
    # path("<int:pk>/",EventDetailsAPI.as_view(),name="event-detail"),
    # path("sub-event/<int:pk>/",SubEventDetailsAPI.as_view(),name="sub-event-detail"),
]