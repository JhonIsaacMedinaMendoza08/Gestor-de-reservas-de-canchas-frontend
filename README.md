# 🎨 Gestor de Reservas de Canchas --- Frontend

Aplicación web para gestionar **canchas** y **reservas**, construida con
**Next.js 14 + Tailwind CSS**.\
Se conecta al backend vía **API REST**.

------------------------------------------------------------------------

## ✨ Características

-   Interfaz moderna y **responsive**.
-   Gestión de **canchas** y **reservas** desde el navegador.
-   **Integración directa** con el backend (API REST).
-   Navegación rápida gracias al enrutador de Next.js.
-   Estilos con **Tailwind** y componentes reutilizables.

------------------------------------------------------------------------

## 🧱 Tech Stack

-   Next.js 14 (App Router)
-   React 18
-   Tailwind CSS

------------------------------------------------------------------------

## 🔐 Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con:

``` env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

------------------------------------------------------------------------

## ⚙️ Instalación y ejecución

``` bash
npm i
npm run dev
```

El frontend quedará disponible en `http://localhost:3000`.

------------------------------------------------------------------------

## 📂 Estructura de carpetas

    frontend/
    │── app/                # Rutas y páginas (Next.js App Router)
    │── components/         # Componentes reutilizables
    │── styles/             # Estilos globales y Tailwind
    │── public/             # Recursos estáticos (logos, imágenes)
    │── package.json
    │── tailwind.config.js
    │── postcss.config.js

------------------------------------------------------------------------

## 🔌 Conexión con el Backend

-   Backend en `http://localhost:4000/api`
-   Frontend en `http://localhost:3000`
-   Configura `NEXT_PUBLIC_API_URL` en `.env`

------------------------------------------------------------------------

## 🌐 Deploy

-   Compatible con **Vercel** (Next.js nativo).
-   Solo debes configurar la variable `NEXT_PUBLIC_API_URL` en el panel
    de Vercel.

------------------------------------------------------------------------

## 🔗 Repositorios

**Backend:** *\[[link backend](https://github.com/JhonIsaacMedinaMendoza08/Gestor-de-reservas-de-canchas.git)\]*\

------------------------------------------------------------------------

## 📝 Licencia

MIT
