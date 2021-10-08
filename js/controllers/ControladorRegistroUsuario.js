import DataService from '../services/DataService.js'

export default class ControladorRegistroUsuarios {
    constructor(elemento){
        this.elemento = elemento;//<-- Es el elemento FORM de HTML
        this.eventosEscucha();
    }

    passwordSonIguales(){
        const inputPassword = this.elemento.querySelectorAll('input[type="password"]')
        let password = []
        for (const input of inputPassword){
            if (password.includes(input.value)===false){
                password.push(input.value)
            }
        }

        if (password.length === 1){
            for (const input of inputPassword) {
                input.setCustomValidity('')
            }
        } else {
            for (const input of inputPassword) {
                input.setCustomValidity('Las contraseñas no coinciden')
            }
        }

    }

    eventosEscucha(){
        this.elemento.addEventListener("submit", async function(evento){
            // Evitamos que el formulario se envie con el prevent
            evento.preventDefault();

            if(this.checkValidity()){
                console.log('Formuario OK')
            } else {
                let mensajeError =''
                for (const element of this.elements) {
                    if(element.validity.valid === false){
                        mensajeError += `Error en el campo ${element.name}: ${element.validationMessage}`
                    }
                } alert(mensajeError)
            }
        })

        this.elemento.querySelectorAll('input[type="password"]').forEach(input => {
            input.addEventListener('input', () => {
                this.passwordSonIguales()
            })
        })

        this.elemento.querySelectorAll('input').forEach(inputElemento =>{
            inputElemento.addEventListener('input', () => {
                if(this.elemento.checkValidity()){
                    this.elemento.querySelector('button').removeAttribute('disabled')
                } else {
                    this.elemento.querySelector('button').setAttribute('disabled', true)
                }
            })
            
        })

    }

}