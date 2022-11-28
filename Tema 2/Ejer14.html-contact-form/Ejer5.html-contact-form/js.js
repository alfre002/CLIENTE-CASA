/* Debes validar todos los campos del formulario cuando cambie el foco de cada campo y/o cuando se envíe.
Reglas de validación:
1) FullName: no puede haber números, no puede estar vacío y como máximo 80 caracteres
2) Email Address: loquesea@loquesea.loquesea
3) Phone number: 9 dígitos
4) Affair: no puede incluir los caracteres / o \, no puede estar vacío y como máximo 120 caracteres
5) Message: no puede estar vacío y como máximo 300 caracteres */

const d = document

// seleccionar campos
const fullname = d.getElementById("fullname")
const email = d.getElementById("email")
const phone = d.getElementById("phone")
const affair = d.getElementById("affair")
const message = d.getElementById("message")

// funcion fullname
const validarName = (fullname) => {
    const exp = /[a-zA-Z]{1,80}/
    if(!exp.test(fullname)) {
        return false
    } else {
        return true
    }
}

// evento fullname
fullname.addEventListener("blur", function(e) {
    const fullname = d.getElementById("fullname")
    if(!validarName(fullname.value)) {
        const error = d.createElement("label")
        error.className = "error"
        error.textContent = "Nombre incorrecto."
        fullname.insertAdjacentElement("afterend", error)
        e.preventDefault()
        setInterval(function() { error.remove()}, 2000)
    } else {
        alert(fullname.value)
    }
})

// funcion email
const validarEmail = (email) => {
    const exp = new RegExp(/.+@.+[.].+/)
    if(!exp.test(email)) {
        return false
    } else {
        return true
    }
}

// evento fullname
email.addEventListener("blur", function(e) {
    const email = d.getElementById("email")
    if(!validarEmail(email.value)) {
        const error = d.createElement("label")
        error.className = "error"
        error.textContent = "Email incorrecto."
        email.insertAdjacentElement("afterend", error)
        e.preventDefault()
        setInterval(function() { error.remove()}, 2000)
    } else {
        alert(email.value)
    }
})