# Aplicación Web para el Mercadillo Campesino de Bucaramanga 🥦

Esta aplicación permite a campesinos, clientes y administradores interactuar a través de una plataforma digital amigable. Los campesinos pueden publicar productos, los clientes pueden explorar y contactar vendedores, y los administradores pueden gestionar todo el sistema.

---

## 📸 Vista previa

![Vista principal](./assets/vista-principal.png)
![Formulario de productos](./assets/form-producto.png)

---

## ✨ Características principales

1. Registro y autenticación segura (JWT)
2. Panel de administración
3. Gestión de productos por parte de los campesinos
4. Búsqueda por categorías y nombre
5. Contacto directo vía WhatsApp

---

## 🚀 Tecnologías utilizadas

- Frontend: HTML, CSS, JavaScript, Bootstrap
- Backend: Node.js, Express
- Base de datos: MySQL + Prisma ORM
- Control de versiones: Git y GitHub

---

## 📂 Estructura del proyecto

```bash
mercadillo-campesino/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── index.js
│
├── frontend/
│   ├── pages/
│   ├── js/
│   └── styles/
│
└── README.md
```

---

## 🔒 Autenticación

El sistema protege rutas según el rol del usuario. El siguiente código muestra cómo se analiza el JWT:

```js
export function parseJwt(token) {
  try {
    const payload = token.split('.')[1];
    const decoded = atob(payload);
    return JSON.parse(decoded);
  } catch (err) {
    return null;
  }
}
```

---

## 🛠️ Cómo ejecutar el proyecto

1. Clona este repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta el backend:
   ```bash
   npm run dev
   ```
4. Abre `index.html` en tu navegador

---

## 📧 Contacto

Desarrollado por:

- Iván Darío Villamizar Archila
- Jefferson Steven Muñoz Delgado

---

## ✅ Licencia

Este proyecto está bajo la licencia MIT.