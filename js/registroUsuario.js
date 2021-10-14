import ControladorRegistroUsuarios from "./controllers/ControladorRegistroUsuario.js";
import ControladorMensajes from './controllers/ControladorMensajes.js'

window.addEventListener("DOMContentLoaded", function(){

    const formulario = document.querySelector("form");

    new ControladorRegistroUsuarios(formulario);

    const mensaje = document.querySelector('.mensaje_error')

    new ControladorMensajes(mensaje)
})