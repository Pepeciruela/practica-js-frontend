import DataService from '../services/DataService.js';
import PubSub from '../services/PubSub.js'

export default class ControladorCrearAnuncio {
    
    constructor(elemento){
        this.elemento = elemento;
        this.eventosEscucha();
    }

    eventosEscucha(){
        this.elemento.addEventListener('submit', async evento =>{

            evento.preventDefault()

            if(this.elemento.checkValidity()){
                const datos = new FormData(this.elemento)
                const mensaje = data.get('nombre')
                try {
                    const resultado = await DataService.crearAnuncio(mensaje)
                    PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Anuncio creado')
                } catch (error) {
                    PubSub.publish(PubSub.events.MOSTRAR_ERROR, error)
                }
            }
        })
    }
}