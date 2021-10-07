
import ControladorListaAnuncios from "./controllers/ControladorListaAnuncios.js"
import ControladorMensajesError from "./controllers/ControladorMensajesError.js";

window.addEventListener("DOMContentLoaded", function(){

     //Controlador pintar errores
    const mensajesError = document.querySelector(".mensaje_error");
    const controladorMensajesError = new ControladorMensajesError(mensajesError);

    //Controlador pintar anuncios
    const listaAnuncios = document.querySelector(".lista_anuncios");
    const controladorListaAnuncios = new ControladorListaAnuncios(listaAnuncios, controladorMensajesError);

    controladorListaAnuncios.renderizarAnuncios();

})


