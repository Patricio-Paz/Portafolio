from rest_framework import serializers
from .models import SkillModel, ProjectModel, TimelineModel, ContactMessageModel

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkillModel
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectModel
        fields = '__all__'

class TimelineSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimelineModel
        fields = '__all__'

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessageModel
        fields = '__all__'
