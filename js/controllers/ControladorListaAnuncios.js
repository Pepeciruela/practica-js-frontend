import { vistaAnuncios } from "../views.js"
import DataService from "../services/DataService.js"

export default class ControladorListaAnuncios {
    constructor(elemento, controladorMensajesError){
        this.elemento = elemento;
        this.controladorMensajesError = controladorMensajesError;
    }
    async renderizarAnuncios(){
        try{
            const anuncios = await DataService.obtenerAnuncios();
            for(const anuncio of anuncios){
                const elementoAnuncio = document.createElement("article")
                elementoAnuncio.innerHTML = vistaAnuncios(anuncio)
                this.elemento.appendChild(elementoAnuncio)
            }
        } catch(error) {
            //this.controladorMensajesError.mostrarError(error)
        }
        
    }
}