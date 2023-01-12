/* 1. Usando la API de https://reqres.in/ e implementado control de errores, realiza:
a. Obtén todos los usuarios (first_name e imagen)
b. Obtén el email, first_name, last_name y avatar (la imagen, no la URL) para un id de
usuario seleccionado por el usuario.
c. Crea un usuario con los datos proporcionados por un usuario y muestra la respuesta
(código y objeto {})
d. Actualiza un usuario con los datos proporcionados por un usuario y muestra la
respuesta (código y objeto {})
e. Elimina un usuario con los datos proporcionados por un usuario y muestra la respuesta
(código y objeto {})
NOTA: La entrada y salida se hace por HTML (el CSS no importa) */

const usuarios = document.getElementById("usuarios")
const $buscador = document.getElementById("buscador")
const $btnBuscar = document.getElementById("btnBuscar")
const $btnCrear = document.getElementById("btnCrear")
const $btnModificar = document.getElementById("btnModificar")
const $btnEliminar = document.getElementById("btnEliminar")

const obtenerUsuarios = (json) => {
    personas = json.data
    console.log(personas)
    personas.forEach(el => {

        // creo las etiquetas
        let img = document.createElement("img")
        let figcaption = document.createElement("figcaption")

        // añado los datos de cada persona
        img.src = el.avatar
        figcaption.innerHTML = el.first_name

        // añado las etiquetas al div principal (figure)
        usuarios.appendChild(img)
        usuarios.appendChild(figcaption)
    })
}

const buscarUsuario = (json) => {
    let id = $buscador.value

    personas = json.data
    personas.forEach(el => {
        if(id == el.id) {
            // creo las etiquetas
            let email = document.createElement("p")
            let img = document.createElement("img")
            let nombre = document.createElement("figcaption")

            // añado los datos de cada persona
            email.textContent = el.email
            img.src = el.avatar
            nombre.innerHTML = el.first_name + ' ' + el.last_name

            // añado las etiquetas al div principal (figure)
            usuarios.appendChild(img)
            usuarios.appendChild(nombre)
            usuarios.appendChild(email)
        }
    })
    
}

const crearUsuario = () => {
    // recojo los datos
    let nombre = document.getElementById("nombre")
    let apellido = document.getElementById("apellido")
    let imagen = document.getElementById("imagen")
    let email = document.getElementById("email")

    // los meto en un objeto
    let nuevoUsuario = {
        'first_name': nombre,
        'last_name': apellido,
        'img': imagen,
        'email': email
    }

    // guardar el objeto Usuario en Local Storage
    localStorage.setItem('usuario',nuevoUsuario)

    // enviar usuario a la API
    fetch("https://reqres.in/api/users", {
        method: "POST",
        body: JSON.stringify({nuevoUsuario})
    })
    .then(response => {
        console.log(response.status)
        return response
    })
    .then(response => response.json())
    .then(data => console.log(data));
}

const modificarUsuario = () => {
    // recoge el usuario que hemos creado
    let usuario = localStorage.getItem("usuario")

    // recoge los datos
    let nombre = document.getElementById("nombre")
    let apellido = document.getElementById("apellido")
    let imagen = document.getElementById("imagen")
    let email = document.getElementById("email")

    // se modifican los campos solo si no están vacios
    if(nombre != ' ') {
        usuario.first_name = nombre
    }

    if(apellido != ' ') {
        usuario.last_name = apellido
    }
    
    if(imagen != ' ') {
        usuario.img = imagen
    }

    if(email != ' ') {
        usuario.email = email
    }

    // enviar usuario a la API
    fetch("https://reqres.in/api/users/13", {
        method: "PUT",
        body: JSON.stringify({user:usuario})
    })
    .then(response => {
        console.log(response.status)
        return response
    })
    .then(response => response.json())
    .then(data => console.log(data));

}

const borrarUsuario = () => {
    let id = $buscador.value
    fetch(`https://reqres.in/api/users/${id}`, {
        method: "DELETE",
    })
    .then(response => console.log(response.status))
    .catch(error => console.log('Error : ' + error))
}

fetch("https://reqres.in/api/users?page=1")
.then((responses) => responses.json())
.then((json) => {
    // obtenerUsuarios(json)
    $btnBuscar.addEventListener("click", () => {
        buscarUsuario(json)
    })
    $btnCrear.addEventListener("click", () => {
        crearUsuario(json)
    })
    $btnModificar.addEventListener("click", () => {
        modificarUsuario(json)
    })
    $btnEliminar.addEventListener("click", () => {
        borrarUsuario()
    })
})
.catch(error => console.error("Error: " + error))

fetch("https://reqres.in/api/users?page=2")
.then((responses) => responses.json())
.then((json) => {
    // obtenerUsuarios(json)
    $btnBuscar.addEventListener("click", () => {
        buscarUsuario(json)
    })
})