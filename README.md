# Desafio Alura Geek

Este proyecto es parte del Desafio Alura Geek, en el cual se implementará un sistema para la gestión de elementos geek a través de un formulario. Los usuarios podrán crear, visualizar y eliminar elementos directamente desde la interfaz de la página web.

⚠️ **Nota:** Debido a los costos, la base de datos tarda en iniciar 2 a 3 minutos desde el ingreso a la pagina.

## Funcionalidades

- **Crear (POST)**: Los usuarios pueden ingresar nuevos elementos geek mediante un formulario. Los datos del formulario se envían a un servidor para su almacenamiento.
- **Visualizar (GET)**: Los elementos geek almacenados se muestran en la página. Los datos se obtienen desde el servidor a través de una solicitud GET.
- **Eliminar (DELETE)**: Los usuarios pueden eliminar elementos específicos mediante un botón en la página.

## Endpoints

El proyecto se comunica con un servidor local mediante los siguientes endpoints:

- **GET /cartas**: Obtener todos los elementos geek.
- **POST /cartas**: Crear un nuevo elemento geek.
- **DELETE /cartas/{id}**: Eliminar un elemento geek específico.

## Base de Datos y Backend

- **Base de Datos**: Se utilizó SQL Database en Azure para el almacenamiento de datos.
- **Backend**: El backend está desplegado en un **App Service de Azure** para manejar las solicitudes de creación, visualización y eliminación de elementos.

## Repositorio del Backend

El código fuente del backend en Node.js está disponible en el siguiente enlace: [Repositorio de Backend](https://github.com/chard33/apiAzureNode).

## ¿Qué incluye este README?

- Funcionalidades del sistema (crear, visualizar, eliminar).
- Detalles sobre los endpoints utilizados.
- Información sobre la base de datos y el backend.
- Enlace al repositorio del backend en Node.js.

---

**Desafío del programa de Alura ONE.**
