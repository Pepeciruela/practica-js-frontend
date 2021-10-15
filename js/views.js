export function adView(ad) {
    return `<a href="/detail.html?id=${ad.id}">
    <div class="post">
        <strong class="author">${ad.nombre}</strong>
        <p class="venta">${ad.venta}</p>
        <p class="precio">${ad.precio}</p>
        <p class="foto">${ad.foto}</p>
        <p class="tags">${ad.tags}</p>
    </div>
    <hr>
</a>`
}

export function errorView(message) {
    return `<div class="error">
        ${message}
        <button>Cerrar</button>
    </div>`
}


export function successView(message) {
    return `<div class="success">
        ${message}
        <button>Cerrar</button>
    </div>`
}


export function loaderView() {
    return '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>'
}


export function adDetailView(ad) {
    if (ad === null) {
        return '<h1>:( NO HAY ANUNCIOS</h1>'
    }
    let button = ''
    if (ad.canBeDeleted) {
        button = '<button class="delete">Borrar</button>'
    }
    return `
    <strong class="author">${ad.nombre}</strong>
    <p class="venta">${ad.venta}</p>
    <p class="precio">${ad.precio}</p>
    <p class="foto">${ad.foto}</p>
    <p class="tags">${ad.tags}</p>
    ${button}
    `
}
