/* Realiza un formulario donde se pueda introducir y enviar un DNI con letra. El formulario
deberá validar si la letra es correcta al:
a) Perder el foco del campo de texto donde se introduce el DNI.
b) Enviar el formulario, cancelando el envío si el formato no es correcto. */

// selecciono campo dni
const dni = document.getElementById("dni")

const validarDni = () => {
    const numero = dni.value.substring(0,8)
    const letra = dni.value.charAt(8)
    const arrayletras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"]
    const resto = parseInt(numero)%23
    if(letra.toUpperCase() != arrayletras[resto]) {
        return false
    } else {
        return true
    }
}

// funcion evento dni
const eventoDni = () => {
    if(!validarDni(dni.value)) {
        alert("El DNI no es válido.")
    }
}

// evento cambio foco
dni.addEventListener("blur", eventoDni)

// selecciono boton enviar
const btnEnviar = document.getElementById("formulario")

// evento enviar
btnEnviar.addEventListener("submit", function(e) {
    if(!validarDni(dni.value)) {
        e.preventDefault()
        const error = document.createElement("label")
        error.textContent = "DNI no válido."
        btnEnviar.insertAdjacentElement("afterend", error)
    } else {
        alert("Formulario enviado.")
    }
})