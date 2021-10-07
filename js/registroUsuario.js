import ControladorRegistroUsuarios from "./controllers/ControladorRegistroUsuario.js";

window.addEventListener("DOMContentLoaded", function(){

    //1. Seleccionar el nodo
    const formulario = document.querySelector("form");

    //2. Crear una instancia del controlador en el formulario
    const controlador = new ControladorRegistroUsuarios(formulario);


})