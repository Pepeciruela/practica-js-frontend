export function adView(ad) {
    return `<a href="/detail.html?id=${ad.id}">
    <div name="post">
        <div class="card mb-3">
        <h3 class="card-header">${ad.nombre}</h3>
        <img src="${ad.foto}" style= "max-width: 300px; max-height: 300px;"></img>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${ad.venta}</li>
        <li class="list-group-item">Precio:<span>${ad.precio}</span> €</li>
        <li class="list-group-item">${ad.tags}</li>
        </ul>
        </div>
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
        <div class="card mb-3">
        <h3 class="card-header">${ad.nombre}</h3>
        <img src="${ad.foto}" style= "max-width: 300px; max-height: 300px;"></img>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${ad.venta}</li>
        <li class="list-group-item">Precio:<span>${ad.precio}</span> €</li>
        <li class="list-group-item">${ad.tags}</li>
        </ul>
        </div>
    </div>
    <br>
        ${button}
    `
}
