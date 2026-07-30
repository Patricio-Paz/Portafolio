from django.db import models

class SkillModel(models.Model):
    CATEGORY_CHOICES = [
        ('frontend', 'Frontend'),
        ('backend', 'Backend'),
        ('database', 'Database'),
        ('devops', 'DevOps & Cloud'),
        ('tools', 'Tools & BI'),
    ]

    LEVEL_CHOICES = [
        ('Senior', 'Senior'),
        ('Avanzado', 'Avanzado'),
        ('Intermedio', 'Intermedio'),
    ]

    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    level = models.CharField(max_length=20, choices=LEVEL_CHOICES)
    years = models.IntegerField(default=1)
    last_project = models.CharField(max_length=255)
    icon_name = models.CharField(max_length=50, default='Code2')
    featured = models.BooleanField(default=False)

    class Meta:
        ordering = ['-years', 'name']

    def __str__(self):
        return f"{self.name} ({self.level})"


class ProjectModel(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=300)
    category = models.CharField(max_length=100, default='Full Stack')
    description = models.TextField()
    problem = models.TextField()
    solution = models.TextField()
    technologies = models.JSONField(default=list)
    architecture = models.JSONField(default=dict)
    repo_url = models.URLField()
    demo_url = models.URLField()
    metrics = models.JSONField(default=list)
    documentation = models.JSONField(default=dict)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class TimelineModel(models.Model):
    TYPE_CHOICES = [
        ('education', 'Estudios'),
        ('internship', 'Práctica Profesional'),
        ('work', 'Trabajo / Experiencia'),
        ('project', 'Proyecto Lead'),
        ('course', 'Curso'),
        ('certification', 'Certificación'),
    ]

    type = models.CharField(max_length=30, choices=TYPE_CHOICES)
    title = models.CharField(max_length=200)
    organization = models.CharField(max_length=200)
    period = models.CharField(max_length=100)
    description = models.TextField()
    badge_text = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return f"{self.title} - {self.organization}"


class ContactMessageModel(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    company = models.CharField(max_length=150, blank=True, null=True)
    project_type = models.CharField(max_length=100, default='hire')
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Mensaje de {self.name} ({self.email})"
