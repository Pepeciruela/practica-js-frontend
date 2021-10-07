const url = 'http://localhost:8000/api/anuncios'

export default {
    obtenerAnuncios: async function() {
        const responder = await fetch(url);
        if(responder.ok){
            return await responder.json()
        } else {
            throw new Error ('Error al recuperar los anuncios')
        }
    }
}