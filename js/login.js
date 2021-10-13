import ControladorRegistroUsuarios from "./controllers/ControladorLogin.js";
import ControladorMensajes from './controllers/ControladorMensajes.js'

window.addEventListener("DOMContentLoaded", function(){

    //1. Seleccionar el nodo
    const formulario = document.querySelector("form");

    //2. Crear una instancia del controlador en el formulario
    const controlador = new ControladorLogin(formulario);

    //
    const mensaje = document.querySelector('.mensaje_error')

    const controladorMensaje = new ControladorMensajes(mensaje)
})