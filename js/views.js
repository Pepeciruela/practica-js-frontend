export function adView(ad) {
    return `<a href="/detail.html?id=${ad.id}">
    <div name="post">
        <div class="card mb-3" id="card-header">
        <h3 class="card-header">${ad.nombre}</h3>
        <img src="${ad.foto}" class ="foto"></img>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${ad.venta}</li>
        <li class="list-group-item">Precio:<span>${ad.precio}</span> €</li>
        <li class="list-group-item">${ad.tags}</li>
        </ul>
        </div>
    </div>
</a>`
}

export function errorView(message) {
    return `
    <div class="alert alert-dismissible alert-danger">
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    <strong>${message}</strong>
    </div>`
}

export function successView(message) {
    return `
    <div class="alert alert-dismissible alert-success">
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    <strong>${message}</strong>
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
        button = '<button class="delete" class="btn btn-danger">Borrar</button>'
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
