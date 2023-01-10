/* Debes validar todos los campos del formulario cuando cambie el foco de cada campo y/o cuando se envíe.
Reglas de validación:
1) FullName: no puede haber números, no puede estar vacío y como máximo 80 caracteres
2) Email Address: loquesea@loquesea.loquesea
3) Phone number: 9 dígitos
4) Affair: no puede incluir los caracteres / o \, no puede estar vacío y como máximo 120 caracteres
5) Message: no puede estar vacío y como máximo 300 caracteres */

const d = document

// seleccionar campos
const nombre = d.getElementById("fullname")
const email = d.getElementById("email")
const phone = d.getElementById("phone")
const affair = d.getElementById("affair")
const message = d.getElementById("message")
const enviar = d.getElementsByTagName("button")[0]
const inputs = d.getElementsByTagName("input")

// funcion validar mensaje
const validarMensaje = () => {
    const mensaje = d.getElementById("message").value
    if(mensaje.length > 300 || mensaje.length == 0) {
        return false
    } else {
        return true
    }
}

// funcion validar affair
const validarAffair = () => {
    const affair = d.getElementById("affair").value
    const expresion = new RegExp(/.{1,120}/)
    if(expresion.test(affair)) {
        return true
    } else {
        return false
    }
}

// funcion validar telefono
const validarTelefono = () => {
    const phone = d.getElementById("phone").value
    if(phone.length != 9) {
        return false 
    } else {
        return true
    }
}

// funcion validar email
const validarEmail = () => {
    const email = d.getElementById("email").value
    const expresion = new RegExp(/.+@.+[.].+/)
    if(expresion.test(email)) {
        return true
    } else {
        return false
    }
}

// funcion validar nombre
const validarNombre = () => {
    const nombre = d.getElementById("fullname").value
    const expresion = new RegExp(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]{1,80}/)
    if(expresion.test(nombre)) {
        return true
    } else {
        return false
    }
}

// eventos campos
nombre.addEventListener("blur", function() {
    if(!validarNombre()) {
        alert("Nombre incorrecto.")
    }
})
email.addEventListener("blur", function() {
    if(!validarEmail()) {
        alert("Email incorrecto.")
    }
})
phone.addEventListener("blur", function() {
    if(!validarTelefono()) {
        alert("Número de teléfono incorrecto.")
    }
})
affair.addEventListener("blur", function() {
    if(!validarAffair()) {
        alert("Affair incorrecto.")
    }
})
message.addEventListener("blur", function() {
    if(!validarMensaje()) {
        alert("Mensaje incorrecto.")
    }
})

// evento enviar
enviar.addEventListener("click", function(e) {
    // comprobar si hay errores para no enviar formulario
    if(!validarNombre() || !validarEmail() || !validarTelefono() || !validarAffair() || !validarMensaje()) {
        e.preventDefault()
    } else {
        alert("Formulario enviado.")
    }

    // mostrar errores si los hay
    if(!validarNombre()) {
        alert("Nombre incorrecto.")
    }
    if(!validarEmail()) {
        alert("Email incorrecto.")
    }
    if(!validarTelefono()) {
        alert("Número de teléfono incorrecto.")
    }
    if(!validarAffair()) {
        alert("Affair incorrecto.")
    }
    if(!validarMensaje()) {
        alert("Mensaje incorrecto.")
    }
})