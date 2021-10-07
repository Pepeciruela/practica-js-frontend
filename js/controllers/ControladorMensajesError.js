import { vistaError } from "../views.js";

export default class ControladorMensajesError {
    constructor(elemento){
        this.elemento = elemento;
    }

    mostrarError(mensaje){
        this.elemento.innerHTML = vistaError(mensaje);
        const boton = this.elemento.querySelector("button");
        boton.addEventListener("click", () => {
            this.ocultarError()
        })
    }

    ocultarError(){
        this.elemento.innerHTML= ""
    }
}