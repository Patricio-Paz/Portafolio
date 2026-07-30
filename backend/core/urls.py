from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def api_root_view(request):
    return JsonResponse({
        "status": "online",
        "message": "Bienvenido a la API REST del Portafolio de Patricio Paz (Django REST Framework)",
        "version": "1.0.0",
        "endpoints": {
            "api_v1_root": "/api/v1/",
            "admin": "/admin/",
            "skills": "/api/v1/skills/",
            "projects": "/api/v1/projects/",
            "timeline": "/api/v1/timeline/",
            "contact": "/api/v1/contact/",
            "smartyard_allocate": "/api/v1/containers/allocate/"
        }
    })

urlpatterns = [
    path('', api_root_view, name='api-root-index'),
    path('admin/', admin.site.urls),
    path('api/v1/', include('api.urls')),
]
