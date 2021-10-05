export function vistaAnuncios(anuncio){
    return `<div class = "post">
    <strong class = "nombre">${anuncio.nombre}</strong>
    <p class = "venta">${anuncio.venta}</p>
    <p class = "precio">${anuncio.precio}</p>
    <p class = "tags">${anuncio.tags}</p>
</div>`
}