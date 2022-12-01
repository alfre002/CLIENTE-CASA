/* 1. Las siguientes verificaciones se realizarán al perder el foco del campo del formulario:
a. El campo Nombre y apellidos no puede tener números. [2p]
b. El campo Fecha de nacimiento debe ser anterior a 2010. [2p]
2. Las siguientes verificaciones se realizarán al enviar el formulario:
a. Todas las anteriores. [1p]
b. Todos los campos deben tener contenido y/o haber seleccionado una opción. [3p]
3. Los mensajes de error de las verificaciones durarán 5 segundos y estarán debajo del
campo en cuestión con un formato proporcionado por una clase CSS (color rojo). [2p] */

const d = document

// selecciono input nombre
const campoNombre = d.querySelector(".nombreApellidos")

// funcion validar nombre
const validarNombre = (nombre) => {
    // expresion regular
    const exp = new RegExp(/^[ a-zA-Z]+$/)
    if(!exp.test(nombre)) {
        return false
    } else {
        return true
    }
}

// funcion error nombre
const errorNombre = (nombre) => {
    if(!validarNombre(nombre.value)) {
        // creo mensaje de error y lo meto debajo del div de nombre
        mostrarError("Nombre incorrecto.", nombre)
    } 
}

// evento nombre
campoNombre.addEventListener("blur", function(e) {
    // recojo nombre
    let nombre = d.querySelector(".nombreApellidos")
    if(!errorNombre(nombre)) {
        // no se envia el formulario
        e.preventDefault()
    }
})

// selecciono campo fecha
const campoFecha = d.querySelector(".fecha")

// funcion validar fecha
const validarFecha = (fecha) => {
    if(fecha.split('-')[0] > 2010) {
        return false
    } else {
        return true
    }
}

// funcion error fecha
const errorFecha = (fecha) => {
    if(!validarFecha(fecha.value)) {
        // creo mensaje de error y lo meto debajo del div de fecha
        mostrarError("Fecha inválida.", fecha)
    }
}

// evento fecha
campoFecha.addEventListener("blur", function(e) {
    // recojo fecha
    let fecha = d.querySelector(".fecha")
    if(!errorFecha(fecha)) {
        // no se envia el formulario
        e.preventDefault()
    }
})

// selecciono boton enviar
const formulario = d.querySelector(".formulario")

// funcion validar campos
const validarCampos = () => {
    // recojo valores de todos los campos
    let nombre = d.querySelector(".nombreApellidos")
    let correo = d.querySelector(".correo")
    let fecha = d.querySelector(".fecha")
    let listaSexo = d.querySelectorAll("[name='sexo']")
    let divSexo = d.querySelector(".divRadio")
    let listaAficiones = d.querySelectorAll("[name='aficiones']")
    let divAficiones = d.querySelector(".divAficiones")
    let mensaje = d.querySelector(".textarea")
    let ciudad = d.querySelector("[name='listaCiudades']")

    // compruebo si las listas están seleccionadas o no
    let listaSexoMarcada = (Array.from(listaSexo).filter(item=>item.checked)).length
    let listaAficionesMarcada = (Array.from(listaAficiones).filter(item=>item.checked)).length

    // variable para no enviar formulario si hay un error
    let esOk = true

    // comprobar que todos los campos son válidos y no están vacíos
    if(nombre.value == "") {
        mostrarError("El campo de nombre está vacío.", nombre)
        esOk = false
    } else if (!validarNombre(nombre.value)) {
        mostrarError("Nombre incorrecto.", nombre)
        esOk = false
    }

    if(correo.value == "") {
        mostrarError("El campo de correo está vacío.", correo)
        esOk = false
    }

    if(fecha.value == "") {
        mostrarError("El campo de fecha está vacío.", fecha)
        esOk = false
    } else if (!validarFecha(fecha.value)) {
        mostrarError("Fecha incorrecta.", fecha)
        esOk = false
    }

    if(listaSexoMarcada == 0) {
        mostrarError("Tienes que selecionar un sexo.", divSexo)
        esOk = false
    }
    
    if(listaAficionesMarcada == 0) {
        mostrarError("Tienes que selecionar al menos una afición.", divAficiones)
        esOk = false
    }

    if(ciudad.value == "") {
        mostrarError("Tienes que selecionar una ciudad.", ciudad)
        esOk = false
    }

    if(mensaje.value == "") {
        mostrarError("Mensaje vacío.", mensaje)
        esOk = false
    }
    return esOk
}

// evento enviar formulario
formulario.addEventListener("submit", function(e) {
    if(!validarCampos()) {
        e.preventDefault()
        return false
    }
})

// funcion validar mensaje
const validarMensaje = (mensaje) => {
    if(mensaje == 0) {
        return false
    } else {
        return true
    }
}

// error mensaje
const errorMensaje = (mensaje) => {
    if(!validarMensaje(mensaje)) {
        // creo mensaje de error y lo meto debajo del div de fecha
        const divMensaje = d.querySelector(".divMensaje")
        const error = d.createElement("label")
        error.textContent = "Mensaje vacío."
        error.className = "error"
        divMensaje.insertAdjacentElement("afterend", error)
        // se borra a los 5 segundos
        setInterval(function () {error.remove()}, 5000)
    }
}

// funcion error correo
const errorCorreo = (correo) => {
    if(!validarCorreo(correo.value.length)) {
        // creo mensaje de error y lo meto debajo del div de fecha
        mostrarError("Correo vacío.", correo)
    }
}

// funcion validar correo
const validarCorreo = (correo) => {
    if(correo == 0) {
        return false
    } else {
        return true
    }
}

// mostrar error
const mostrarError = (mensaje, elemento) => {
    let error = d.createElement("p")
    error.className = "error"
    error.textContent= mensaje
    elemento.insertAdjacentElement("afterend", error)

    setTimeout(() => { error.remove() }, 3000)
}