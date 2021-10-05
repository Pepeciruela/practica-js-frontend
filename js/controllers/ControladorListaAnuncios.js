import DataService from "../services/DataService.js";
import {vistaAnuncios} from "../views.js"

export default async function (elementoDom){
    try{
        const anuncios = await DataService.cogerAnuncios();

        for (const anuncio of anuncios){
            //creo un elemento article por cada anuncio
            const anuncioListado = document.createElement("article");
            //lo inserto en el HTML
            const anuncioHTML = vistaAnuncios(anuncio);
            anuncioListado.innerHTML = anuncioHTML;
            //le añado el anuncio al padre
            elementoDom.appendChild(anuncioListado);
    }
} catch (error){
        alert(error)
    }
};