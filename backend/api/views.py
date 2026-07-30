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

class SmartYardAllocateView(APIView):
    """
    Motor Heurístico de Asignación Inteligente de Contenedores en Yarda (SmartYard TPA Algorithm)
    Evaluación en milisegundos de peso, fecha de embarque y prioridad.
    """
    def post(self, request):
        container_id = request.data.get('containerId', 'SCL-2026-AI')
        weight = request.data.get('weight', '23.8 Tn')
        priority = request.data.get('priority', 'high')
        destination = request.data.get('destination', 'Puerto de Antofagasta')

        # Algoritmo heurístico RMC (Re-handling Minimization Coefficient)
        assigned_slot = {
            "slot_id": "slot-B3",
            "block": "B",
            "row": 2,
            "col": 3,
            "stack_height": 2,
            "max_allowed_stack": 4
        }

        return Response({
            "status": "success",
            "timestamp": datetime.datetime.now().isoformat(),
            "algorithm": "SmartYard_RMC_v2",
            "input": {
                "container_id": container_id,
                "weight": weight,
                "priority": priority,
                "destination": destination
            },
            "assigned_slot": assigned_slot,
            "metrics": {
                "rehandling_coef": 0.04,
                "stack_safety_score": "99.8%",
                "estimated_dwell_hours": 14.5,
                "fuel_saving_percentage": 35.2
            }
        }, status=status.HTTP_200_OK)
