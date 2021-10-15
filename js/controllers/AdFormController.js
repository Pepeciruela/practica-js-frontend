import DataService from "../services/DataService.js"
import PubSub from "../services/PubSub.js"

export default class AdFormController {

    constructor(element) {
        this.element = element
        this.attachEventListeners()
    }

    attachEventListeners() {
        this.element.addEventListener('submit', async event => {
            event.preventDefault()

            if (this.element.checkValidity()) {
                const data = new FormData(this.element)
                const nombre = data.get('nombre')
                const venta = data.get('venta')
                const precio = data.get('precio')
                const foto = data.get('foto')
                const tags = data.get('tags')
                try {
                    const result = await DataService.createAd(nombre, venta, precio, foto, tags)
                    PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Anuncio creado!')
                } catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)
                }
            }
        })
    }

}
