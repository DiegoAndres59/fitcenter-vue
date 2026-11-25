
# FitCenter - Sistema de Gestión de Gimnasio

## Descripción del proyecto

FitCenter es una aplicación web desarrollada para un gimnasio,
que permite consultar servicios, conocer planes de entrenamiento,
visualizar frases motivacionales y gestionar inscripciones.

El proyecto utiliza una arquitectura SPA basada en componentes
reactivos con Vue.js.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Vue.js 3
- Vue Router
- Vite
- Fetch API
- LocalStorage
- Git y GitHub

## Funcionalidades

- Navegación entre cinco vistas sin recargar la página.
- Visualización de servicios del gimnasio.
- Consulta y selección de planes.
- Consumo de API de frases mediante DummyJSON.
- Formulario reactivo con validaciones dinámicas.
- Registro, edición y eliminación de inscripciones.
- Persistencia de datos mediante localStorage.
- Diseño adaptable a diferentes dispositivos.

## Arquitectura del proyecto

    fitcenter-vue/
    ├── public/
    ├── src/
    │   ├── assets/
    │   │   └── styles.css
    │   ├── components/
    │   │   ├── Navbar.vue
    │   │   ├── Footer.vue
    │   │   ├── ServiceCard.vue
    │   │   ├── PlanCard.vue
    │   │   ├── QuoteCard.vue
    │   │   ├── RegistrationForm.vue
    │   │   └── RegistrationList.vue
    │   ├── views/
    │   │   ├── Inicio.vue
    │   │   ├── Servicios.vue
    │   │   ├── Planes.vue
    │   │   ├── Motivacion.vue
    │   │   └── Inscripcion.vue
    │   ├── router/
    │   │   └── index.js
    │   ├── store/
    │   │   └── registrations.js
    │   ├── App.vue
    │   └── main.js
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── README.md

## Instalación y ejecución local

Instalar las dependencias:

    npm install

Ejecutar el servidor de desarrollo:

    npm run dev

Generar el build de producción:

    npm run build

Visualizar la versión de producción:

    npm run preview

## API utilizada

https://dummyjson.com/quotes/random

## Despliegue

Enlace de producción: Pendiente de publicación.

## Información académica

- Universidad de Córdoba
- Ingeniería de Sistemas
- Asignatura: Desarrollo Web
- Estudiante: Diego Andrés Díaz Vargas
- Año: 2026
