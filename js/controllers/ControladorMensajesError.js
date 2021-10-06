import { vistaError } from "../views.js";

export default class ControladorMensajesError {
    constructor(elemento){
        this.elemento = elemento;
    }

    mostrarError(error){
        this.elemento.innerHTML = vistaError(error);
        const boton = this.elemento.querySelector("button");
        boton.addEventListener("click", () => {
            this.ocultarError()
        })
    }

    ocultarError(){
        this.elemento.innerHTML= ""
    }
}