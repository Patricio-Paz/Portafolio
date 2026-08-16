from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import SkillModel, ProjectModel, TimelineModel, ContactMessageModel
from .serializers import SkillSerializer, ProjectSerializer, TimelineSerializer, ContactMessageSerializer
import datetime

class SkillViewSet(viewsets.ModelViewSet):
    queryset = SkillModel.objects.all()
    serializer_class = SkillSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = ProjectModel.objects.all()
    serializer_class = ProjectSerializer

class TimelineViewSet(viewsets.ModelViewSet):
    queryset = TimelineModel.objects.all()
    serializer_class = TimelineSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = ContactMessageModel.objects.all()
    serializer_class = ContactMessageSerializer
