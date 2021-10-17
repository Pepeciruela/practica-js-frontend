import AdFormController from "./controllers/AdFormController.js"
import MessageController from "./controllers/MessageController.js"
import DataService from "./services/DataService.js"

window.addEventListener('DOMContentLoaded', function(){

    if (DataService.isAuthenticed() === false) {
        window.location.href = '/login.html?next=/new.html'
    }

    const form = document.querySelector('form')

    new AdFormController(form)

    const messages = document.querySelector('.anuncios')

    new MessageController(messages)

})
