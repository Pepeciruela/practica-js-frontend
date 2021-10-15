import SignupController from "./controllers/SignupController.js"
import MessageController from "./controllers/MessageController.js"

window.addEventListener('DOMContentLoaded', function(){

    const form = document.querySelector('form')

    new SignupController(form)

    const messages = document.querySelector('.error-message')

    new MessageController(messages)

})
