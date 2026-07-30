# Portafolio Profesional — Patricio Paz

Portafolio web profesional de Patricio Paz (Desarrollador Full Stack / Backend Developer Junior), desarrollado en React + Vite con backend en Django REST Framework.

---

## 🔐 Archivos de Configuración (.env)
La información clasificada del proyecto (credenciales de admin, llaves de API y configuraciones) se gestionan mediante variables de entorno en los archivos:
- 📄 `backend/.env`: Credenciales Django Admin y Secret Key.
- 📄 `frontend/.env`: Servicio e Integración EmailJS.

Para consultar la guía completa, revisa [README_EXCLUSIVO.md](file:///d:/Desarrollo/premium-portfolio/README_EXCLUSIVO.md).

---

## 💻 Ejecución Local

### Frontend (React + Vite)
```bash
cd D:\Desarrollo\premium-portfolio\frontend
npm run dev
```
Servidor disponible en: `http://localhost:5173`

### Backend (Django REST Framework)
```bash
cd D:\Desarrollo\premium-portfolio\backend
python manage.py runserver 8000
```
API disponible en: `http://127.0.0.1:8000/`
