# ⚽ Barrio Gol

Plataforma web para la gestión de torneos, equipos y jugadores de fútbol barrial. Incluye autenticación segura, rutas privadas, tiempo real con sockets y manejo de archivos multimedia.

---

## 🚀 Tecnologías

### Backend

* **Python 3.11**
* **FastAPI**
* **SQLAlchemy**
* **MySQL**
* **JWT (python-jose)**
* **Autenticación con cookies**
* **bcrypt** (hash de contraseñas)
* **Socket.IO** (tiempo real)

### Frontend

* **Vue 3**
* **Vue Router**
* **Axios**
* **JWT en cookies / localStorage**

---

## 🔐 Seguridad y Autenticación

✔ Login con **JWT**
✔ Token firmado con **HS256**
✔ Payload con:

* `sub` (correo del usuario)
* `exp` (expiración)

✔ Contraseñas hasheadas con **bcrypt**
✔ **Private Routes** protegidas en backend y frontend
✔ Middleware de validación de token

---

## 📂 Estructura del Proyecto (Backend)

```
backend/
│── venv/
│── vista.py
│── modelo.py
│── schemas.py
│── conexion.py
│── private_routes.py
│── requirements.txt
│── .env
│── images_container/
│── uploads/
```

---

## 🧪 Requisitos Previos

* Python **3.11.x**
* MySQL activo
* Node.js (para frontend)

---

## ⚙️ Instalación Backend (PASOS IMPORTANTES)

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/Barrio-Gol.git
cd Barrio-Gol/backend
```

---

### 2️⃣ Crear entorno virtual

```bash
python -m venv venv
```

Activar:

**Windows**

```bash
venv\Scripts\activate
```

**Linux / Mac**

```bash
source venv/bin/activate
```

---

### 3️⃣ Instalar dependencias

```bash
pip install -r requirements.txt
```

📌 **Nota importante**: este proyecto usa un `requirements.txt` **limpio** (solo dependencias principales). `pip` instala automáticamente las dependencias internas.

---

### 4️⃣ Variables de entorno (.env)

Crear archivo `.env` en `/backend`:

```env
SECRET_KEY=piniasHello
ALGORITHM=HS256
DATABASE_URL=mysql+mysqlconnector://user:password@localhost/barrio_gol
```

---

### 5️⃣ Ejecutar el servidor

```bash
uvicorn vista:app --reload
```

Servidor disponible en:

```
http://127.0.0.1:8000
```

---

## 🔒 Rutas Privadas (Backend)

El proyecto incluye:

* Dependencias `Depends(get_current_user)`
* Validación del token JWT
* Expiración automática

Archivo clave:

```
private_routes.py
```

---

## 🔐 Rutas Privadas (Frontend)

Guard global con Vue Router:
✔ Protege rutas privadas

---

## 📦 Manejo de Dependencias (Python)

✔ Se usa:

```txt
fastapi
uvicorn
sqlalchemy
python-jose[cryptography]
bcrypt
python-dotenv
mysql-connector-python
firebase-admin
python-multipart
```

📌 **Buenas prácticas**:

* NO usar `pip freeze` en producción
* Solo dependencias directas
* Profesional y mantenible

---

## 📡 Tiempo Real (Socket.IO)

Permite:

* Mensajes en tiempo real
* Notificaciones
* Chats

---

## 📁 Archivos Estáticos

Soporte para:

* Imágenes
* Videos
* Logos

Configurados con:

```python
app.mount("/images_container/...", StaticFiles(...))
```

---

## 🧠 Estado del Proyecto

✔ Login / Registro
✔ JWT + Cookies
✔ Rutas privadas
✔ Sockets
✔ Multimedia
✔ Arquitectura profesional

---

## 🧑‍💻 Autor

**Kevin Beltrán**
Proyecto full stack con FastAPI + Vue 3

---

## ⭐ Recomendaciones

* Usar `.env` en producción
* Activar HTTPS
* Rotar `SECRET_KEY`
* Validar expiración del token

---

⚽ **Barrio Gol** – Tecnología al servicio del fútbol barrial
