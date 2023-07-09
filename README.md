## Link al curso completo de Javascript en Youtube:
[VIDEO CURSO GRATIS COMPLETO: JavaScript Desde Cero por Sergie Code](https://youtu.be/N8Xt5rP_DUo)


# Tutorial de Aplicación de Venta de Viajes en JavaScript

Link para ver resultado: [VENTA VIAJES FINALIZADO](https://venta-viajes-curso-javascript.netlify.app/)

Este es un tutorial que te guiará a través del proceso de creación de una aplicación de venta de viajes utilizando JavaScript. La aplicación mostrará información sobre diferentes ciudades turísticas y sus precios asociados.

## Requisitos previos

-   Conocimientos básicos de HTML y CSS.
-   Un entorno de desarrollo para escribir y ejecutar código JavaScript.

## Configuración inicial

1.  Clona o descarga los archivos HTML y CSS necesarios para este proyecto desde el repositorio en GitHub.

## Funcionamiento del código JavaScript

El código JavaScript proporcionado se encarga de actualizar la información mostrada en la página web cuando se hace clic en un enlace de ciudad.

### Importación de datos de las ciudades

Las variables `barcelona`, `roma`, `paris` y `londres` se importan desde el archivo `ciudades.js`, que contiene la información de cada ciudad. Asegúrate de que este archivo esté disponible en el repositorio junto con el código JavaScript.

### Obtención de elementos del DOM

El código utiliza el método `document.getElementById` para obtener los elementos del DOM necesarios para actualizar la información de la página. Estos elementos se asignan a las siguientes variables:

-   `enlaces`: una colección de todos los elementos de ancla (`<a>`) en la página.
-   `tituloElemento`: el elemento de título (`<h1>`) donde se mostrará el título de la ciudad seleccionada.
-   `subTituloElemento`: el elemento de subtítulo (`<h2>`) donde se mostrará el subtítulo de la ciudad seleccionada.
-   `parrafoElemento`: el elemento de párrafo (`<p>`) donde se mostrará la descripción de la ciudad seleccionada.
-   `precioElemento`: el elemento donde se mostrará el precio de la ciudad seleccionada.

### Agregar evento CLICK a los enlaces

Se agrega un evento `click` a cada enlace mediante un bucle `forEach`. Cuando se hace clic en un enlace, se ejecuta la función de devolución de llamada proporcionada. El código dentro de esta función realiza las siguientes acciones:

-   Remueve la clase `active` de todos los enlaces utilizando otro bucle `forEach`.
-   Agrega la clase `active` al enlace actual (`this`).
-   Obtiene el contenido correspondiente a la ciudad seleccionada utilizando la función `obtenerContenido` y el texto del enlace actual.
-   Actualiza los elementos del DOM con la información de la ciudad seleccionada.

### Función para obtener contenido de la ciudad

La función `obtenerContenido` toma el texto del enlace como parámetro y devuelve el contenido correspondiente de la ciudad desde el archivo `ciudades.js`. Utiliza un objeto `contenido` para mapear el texto del enlace con el contenido de la ciudad.

## Personalización del contenido

Puedes personalizar el contenido de las ciudades modificando el archivo `ciudades.js`. Cada ciudad es representada por un objeto con propiedades como `titulo`, `subtitulo`, `parrafo` y `precio`.

## Conclusiones

Con este tutorial, has aprendido a crear una aplicación de venta de viajes utilizando JavaScript. Ahora puedes personalizar el contenido y expandir la funcionalidad de la aplicación según tus necesidades. ¡Diviértete programando!
