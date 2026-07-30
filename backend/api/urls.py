from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SkillViewSet, ProjectViewSet, TimelineViewSet, ContactViewSet, SmartYardAllocateView

router = DefaultRouter()
router.register(r'skills', SkillViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'timeline', TimelineViewSet)
router.register(r'contact', ContactViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('containers/allocate/', SmartYardAllocateView.as_view(), name='smartyard-allocate'),
]
