import ControladorDetalleAnuncios from './controllers/ControladorDetalleAnuncios.js'

window.addEventListener("DOMContentLoaded", function(){

    const id = new URLSearchParams(window.location.search).get('id');

    const anuncioDiv = document.querySelector('.anuncio')

    new ControladorDetalleAnuncios(anuncioDiv, id)

})