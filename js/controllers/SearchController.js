import DataService from '../services/DataService.js'
import { adView } from '../views.js'

const debounce = (func, timeout = 300) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

export default class SearchController {

    constructor(element) {
        this.element = element
        this.attachEventListeners()
    }

    attachEventListeners() {
        this.element.addEventListener('input', debounce(async () => {
            this.searchAds()
            console.log('PUBLISH', 'SEARCH', this.element.value)
        }, 1000))
    }

    async searchAds(){
        try{
            const ads = await DataService.searchAd()
            for(const ad of ads){
                console.log(ad)
            }
        }catch (error) {
            this.errorMessageController.showError(error)
    }


}
}
