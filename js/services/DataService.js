

export default {
    obtenerAnuncios: async function() {
        const url = 'http://localhost:8000/api/anuncios?_expand=user'
        const responder = await fetch(url);
        if(responder.ok){
            return await responder.json()
        } else {
            throw new Error ('Error al recuperar los anuncios')
        }
    },

    post: async function(url, body) {
        const solicitudConfiguracion = {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        }

        if(this.estaAutenticado()){
            const token = localStorage.getItem('AUTH_TOKEN');
            solicitudConfiguracion.headers['Authorization'] = `Bearer ${token}`
        }

        const respuesta = await fetch(url, solicitudConfiguracion)
        try{
            const datos = await respuesta.json()
            if (respuesta.ok) {
                return datos
            } else {
                throw new Error (datos.mensaje)
            }
        } catch (error) {
            throw error

        }
    },

    registrarUsuario: async function(nombreusuario, password){
        const url = 'http://localhost:8000/auth/register'
        return await this.post(url, {nombreusuario, password})
        
    },

    login: async function(nombreusuario, password){
        const url = 'http://localhost:8000/auth/login'
        const datos = await this.post(url, {nombreusuario, password})
        const token = datos.accessToken
        localStorage.setItem('AUTH_TOKEN', token)
        
    },

    estaAutenticado: function(){
        return localStorage.getItem('AUTH_TOKEN') !== null
    },

    crearAnuncio: function(mensaje){
        const url = 'http://localhost:8000/api/anuncios'
        return this.post(url, {mensaje})
    }

}