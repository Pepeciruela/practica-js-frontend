import DataService from '../services/DataService.js'
import PubSub from '../services/PubSub.js'
import { vistaDetalleAnuncio } from '../views.js'

export default class ControladorDetalleAnuncios {

    constructor(elemento,id){
        this.elemento = elemento
        this.cargarAnuncio(id)
    }

    async cargarAnuncio(id){
        try{
            
            const anuncio = await DataService.obtenerAnuncio(id)
            this.elemento.innerHTML = vistaDetalleAnuncio(anuncio)

        } catch {
            PubSub.publish(PubSub.events.MOSTRAR_ERROR, error)
        }
    }
}