import { barcelona, roma, paris, londres } from './ciudades.js';

// Obtener los elementos del DOM
let enlaces = document.querySelectorAll('a');
let tituloElement = document.getElementById('titulo');
let subtituloElement = document.getElementById('subtitulo');
let parrafoElement = document.getElementById('parrafo');

// Agregar el evento clic a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        // Remover la clase "active" de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        // Agregar la clase "active" al enlace actual
        this.classList.add('active');

        // Obtener el contenido correspondiente según el enlace
        let contenido = obtenerContenido(this.textContent);

        // Mostrar el contenido en los elementos del DOM
        tituloElement.innerHTML = contenido.titulo;
        subtituloElement.innerHTML = contenido.subtitulo;
        parrafoElement.innerHTML = contenido.parrafo;
    });
});

// Función para obtener el contenido según el enlace seleccionado
function obtenerContenido(enlace) {
    console.log(enlace)
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };

    return contenido[enlace];
}