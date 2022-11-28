/* Realiza un formulario que pida una dirección de email y la valide antes de enviarla:
a) Debe validar si el email sigue el formato texto@servidor.loquesea
b) Además de validar el formato anterior, debe comprobar que servidor.loquesea este
como servidor admitido en un array de servidores llamado “listaServidores”.
Dicho array debe ser definido a mano en el código.
Ejemplo
let listaServidores=["terra.es","google.com","marca.es","yahoo.es"]; */

const d = document

// selecciono boton enviar
const btnEnviar = d.getElementById("enviar")

// funcion validar email
const validarEmail = (email) => {
    // lista de servidores
    const listaServidores=["terra.es","google.com","marca.es","yahoo.es"]
    // expresion regular
    const exp = new RegExp(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/)
    if(!exp.test(email)) {
        return false
    }

    const servidor = email.split("@")
    if(!listaServidores.includes(servidor[1])) {
        return false
    } else {
        return true
    }
}

// selecciono formulario
const form = d.getElementById("form")

// evento enviar
btnEnviar.addEventListener("click", function(e) {
    const email = d.getElementById("email").value
    if(!validarEmail(email)) {
        const error = d.createElement("label")
        error.textContent = "Email no válido"
        error.style.color = "red"
        form.insertAdjacentElement("afterend", error)
        e.preventDefault()
        setInterval(function() { error.remove()}, 2000)
    } else {
        alert("Formulario enviado.")
    }
})