import PubSub from '../services/PubSub.js'
import {vistaError, successview} from '../views.js'


export default class ControladorMensajes {

    constructor(elemento){
        this.elemento = elemento

        PubSub.subscribe(PubSub.events.MOSTRAR_ERROR, error => {
            this.mostrarError(error)
        })

        PubSub.subscribe(PubSub.events.SHOW_SUCCESS, mensaje => {
            this.showSucces(mensaje)
        })
    }

    eventoCierre(){
        const boton = this.elemento.querySelector("button");
        boton.addEventListener("click", () => {
            this.ocultarError()
    })}

    showSucces(mensaje){
        this.elemento.innerHTML = successView(mensaje);
        this.eventoCierre()
    }

    mostrarError(mensaje){
        this.elemento.innerHTML = vistaError(mensaje);
        this.eventoCierre()
    }

    ocultarError(){
        this.elemento.innerHTML= ""
    }
}