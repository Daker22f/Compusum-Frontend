# Compusum Landing Page

Página de aterrizaje (landing page) oficial del proyecto **Compusum**, construida con React, TypeScript y Vite. Este repositorio forma parte del monorepo `Compusum-Frontend`.

---

## 📋 Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) `v18` o superior
- [npm](https://www.npmjs.com/) o [bun](https://bun.sh/) (el proyecto incluye lockfiles para ambos)
- Git

> **Tip:** Se recomienda usar [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) para gestionar versiones de Node.js fácilmente.

---

## 🚀 Instalación y puesta en marcha

Sigue estos pasos para correr el proyecto en tu máquina local:

```sh
# 1. Clona el repositorio principal
git clone <URL_DEL_REPOSITORIO>

# 2. Entra al directorio de la landing
cd Compusum-Frontend/Compusum-landing

# 3. Instala las dependencias
npm install
# o con bun:
bun install

# 4. Inicia el servidor de desarrollo
npm run dev
# o con bun:
bun dev
```

El servidor de desarrollo se iniciará en `http://localhost:8080` (o el puerto que indique la consola) con recarga automática al guardar cambios.

---

## 📦 Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con hot-reload |
| `npm run build` | Genera el build de producción en `/dist` |
| `npm run build:dev` | Genera el build en modo desarrollo |
| `npm run preview` | Previsualiza el build de producción localmente |
| `npm run lint` | Ejecuta ESLint para detectar errores de código |
| `npm run test` | Ejecuta los tests con Vitest |
| `npm run test:watch` | Ejecuta los tests en modo watch |

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Descripción |
|---|---|
| [Vite](https://vitejs.dev/) | Bundler y servidor de desarrollo ultrarrápido |
| [React 18](https://react.dev/) | Librería principal de UI |
| [TypeScript](https://www.typescriptlang.org/) | Tipado estático para JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | Framework de estilos utility-first |
| [shadcn/ui](https://ui.shadcn.com/) | Componentes de UI accesibles y personalizables |
| [Radix UI](https://www.radix-ui.com/) | Primitivos de UI sin estilos predeterminados |
| [React Router DOM](https://reactrouter.com/) | Enrutamiento del lado del cliente |
| [TanStack Query](https://tanstack.com/query) | Gestión de estado y fetching de datos |
| [React Hook Form](https://react-hook-form.com/) | Manejo de formularios con validación |
| [Zod](https://zod.dev/) | Validación de esquemas TypeScript-first |
| [Recharts](https://recharts.org/) | Gráficas y visualización de datos |
| [Lucide React](https://lucide.dev/) | Iconos SVG para React |
| [Vitest](https://vitest.dev/) | Framework de testing ultrarrápido |
| [Playwright](https://playwright.dev/) | Testing end-to-end |

---

## 📁 Estructura del proyecto

```
Compusum-landing/
├── public/             # Archivos estáticos públicos
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── pages/          # Páginas / rutas de la aplicación
│   ├── hooks/          # Custom hooks de React
│   ├── lib/            # Utilidades y helpers
│   └── main.tsx        # Punto de entrada de la aplicación
├── index.html          # HTML base
├── vite.config.ts      # Configuración de Vite
├── tailwind.config.ts  # Configuración de Tailwind CSS
├── tsconfig.json       # Configuración de TypeScript
└── package.json        # Dependencias y scripts
```

---

## 🏗️ Build de producción

Para generar los archivos optimizados para producción:

```sh
npm run build
```

Los archivos resultantes se guardarán en la carpeta `/dist`, listos para desplegarse en cualquier servidor estático (Nginx, Apache, Vercel, Netlify, etc.).

Para previsualizar el build antes de desplegar:

```sh
npm run preview
```

---

## 🧪 Tests

El proyecto usa **Vitest** para unit/integration tests y **Playwright** para tests end-to-end.

```sh
# Correr todos los tests una vez
npm run test

# Correr tests en modo watch (ideal durante desarrollo)
npm run test:watch
```

---

## 🤝 Contribución

1. Haz un fork o clona el repositorio
2. Crea una rama para tu feature o corrección: `git checkout -b feature/mi-feature`
3. Realiza tus cambios y haz commit: `git commit -m "feat: descripción del cambio"`
4. Sube tus cambios: `git push origin feature/mi-feature`
5. Abre un Pull Request describiendo tus cambios

---

## 📄 Licencia

Este proyecto es privado y propiedad de **Brackix / Compusum**. Todos los derechos reservados.
