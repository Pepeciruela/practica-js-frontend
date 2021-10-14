export function vistaAnuncios(anuncio){
    return `<a href='detalle-anuncio.html?=${anuncio.id}'>
    <div class = "post">
    <strong class = "nombre">${anuncio.nombre}</strong>
    <p class = "venta">${anuncio.venta}</p>
    <p class = "precio">${anuncio.precio}</p>
    <p class = "tags">${anuncio.tags}</p>
</div>
<hr>
</a>`
}

export function vistaError(error){
    return `<div class="error">
    ${error}
    <button>Cerrar</button>
    </div>`
}

export function successView(mensaje){
    return `<div class="success">
    ${mensaje}
    <button>Cerrar</button>
    </div>`
}

export function vistaDetalleAnuncio(anuncio){
    return `
    <strong class = "nombre">${anuncio.nombre}</strong>
    <p class = "venta">${anuncio.venta}</p>
    <p class = "precio">${anuncio.precio}</p>
    <p class = "tags">${anuncio.tags}</p>
    `


}