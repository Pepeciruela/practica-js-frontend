import DataService from '../services/DataService.js';
import PubSub from '../services/PubSub.js';


export default class ControladorLogin {

    constructor(elemento){
        this.elemento = elemento;
        this.eventosEscucha();
    }

    eventosEscucha(){
        this.elemento.addEventListener('submit', async evento => {
            evento.preventDefault()

            if (this.elemento.checkValidity()) {
                const datos = new FormData(this.elemento)
                const nombreusuario = datos.get('nombreusuario')
                const password = datos.get('password')
                try{
                    const resultado = await DataService.login(nombreusuario, password)
                    location.href = '/'
                } catch {
                    PubSub.publish(PubSub.events.MOSTRAR_ERROR, error)
                }
                
            } else {
                PubSub.publish(PubSub.events.MOSTRAR_ERROR, 'Ambos campos son requeridos')
            }
        } )
    }

}