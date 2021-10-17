export function adView(ad) {
    return `<a href="/detail.html?id=${ad.id}">
    <div name="post">
        <p name="nombre">${ad.nombre}</p>
        <p name="venta">${ad.venta}</p>
        <p name="precio">${ad.precio}</p>
        <img src="${ad.foto}" name="foto">
        <p name="tags">${ad.tags}</p>
    </div>
    <br>
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
        return '<h1>NO HAY ANUNCIOS DISPONIBLES</h1>'
    }
    let button = ''
    if (ad.canBeDeleted) {
        button = '<button class="delete">Borrar</button>'
    }
    return `
    <div name="post">
        <p name="nombre">${ad.nombre}</p>
        <p name="venta">${ad.venta}</p>
        <p name="precio">${ad.precio}</p>
        <img src="${ad.foto}" name="foto">
        <p name="tags">${ad.tags}</p>
    </div>
    <br>
        ${button}
    `
}
