# 🔐 Guía Exclusiva de Configuración & Archivos de Entorno (.env)

Toda la información clasificada, credenciales de administración, llaves de API y variables de entorno han sido centralizadas en los archivos `.env` del proyecto para máxima seguridad y fácil acceso.

---

## 📁 Ubicación de los Archivos de Entorno (.env)

### 1. Variables del Backend (`backend/.env`)
Ubicación: `d:\Desarrollo\premium-portfolio\backend\.env`

Las variables clasificadas del servidor Django (credenciales del panel administrador y claves secretas) se encuentran definidas en este archivo:

```env
# backend/.env
DJANGO_SECRET_KEY=...
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=...


```

- **Acceso al Panel Django Admin**: [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)
- Consulta o modifica la contraseña del superusuario editando directamente la variable `DJANGO_ADMIN_PASSWORD` en `backend/.env`.

---

### 2. Variables del Frontend (`frontend/.env`)
Ubicación: `d:\Desarrollo\premium-portfolio\frontend\.env`

Las llaves de integración del formulario de contacto (EmailJS) y correos de destino se gestionan en este archivo:

```env
# frontend/.env
VITE_EMAILJS_SERVICE_ID=service_uqebimk
VITE_EMAILJS_TEMPLATE_ID=template_dhxwfcz
VITE_EMAILJS_PUBLIC_KEY=mZ309sTTJsW4TJads
VITE_CONTACT_EMAIL=Patricioppaz2312@gmail.com
```

---

## 🚀 Comandos de Ejecución

### Backend (Django)
```bash
cd d:\Desarrollo\premium-portfolio\backend
python manage.py runserver 8000
```

### Frontend (React + Vite)
```bash
cd d:\Desarrollo\premium-portfolio\frontend
npm run dev
```
