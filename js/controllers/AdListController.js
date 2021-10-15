import { adView } from '../views.js'
import DataService from '../services/DataService.js'


export default class AdListController {

    constructor(element, errorMessageController) {
        this.element = element
        this.errorMessageController = errorMessageController
    }

    async renderAds() {
        try {
            const ads = await DataService.getAds()
            for (const ad of ads) {
                const adElement = document.createElement('article')
                adElement.innerHTML = adView(ad)
                this.element.appendChild(adElement)
            }
        } catch (error) {
            this.errorMessageController.showError(error)
        }
    }

}
