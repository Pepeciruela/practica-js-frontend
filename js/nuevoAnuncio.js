import ControladorCrearAnuncio from './controllers/controladorCrearAnuncio.js';
import ControladorMensajes from './controllers/ControladorMensajes.js'
import DataService from './services/DataService.js'

window.addEventListener("DOMContentLoaded", function(){


    if (DataService.estaAutenticado() === false){
        window.location.href = '/login-usuario.html?next=/crear-anuncio.html'
    }

    //1. Seleccionar el nodo
    const formulario = document.querySelector("form");

    //2. Crear una instancia del controlador en el formulario
    const controlador = new ControladorCrearAnuncio(formulario);

    const mensaje = document.querySelector('.mensaje_error')

    const controladorMensaje = new ControladorMensajes(mensaje)
})