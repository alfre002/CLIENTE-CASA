/* Realiza un formulario que pida una dirección de email y la valide antes de enviarla:
a) Debe validar si el email sigue el formato texto@servidor.loquesea
b) Además de validar el formato anterior, debe comprobar que servidor.loquesea este
como servidor admitido en un array de servidores llamado “listaServidores”.
Dicho array debe ser definido a mano en el código. */

// selecciono boton enviar
const btnEnviar = document.querySelector("#enviar")

// definir servidores válidos
const listaServidores=["terra.es","google.com","marca.es","yahoo.es"]

// funcion validar formato
const validarFormato = () => {
    const email = document.querySelector("#email").value
    const formatoValido = new RegExp(/.+@.+[.].+/)
    if(formatoValido.test(email)) {
        // coger el servidor del email
        const servidor = email.split('@')[1]
        // comprobar si están en la lista de servidores válidos
        if(listaServidores.includes(servidor)) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

// selecciono el formulario
const formulario = document.querySelector("#form")

// evento enviar
formulario.addEventListener("submit", function(e) {
    if(!validarFormato()) {
        e.preventDefault()
        alert("El correo introducido no es válido.")
    } else {
        alert("El formulario se ha enviado correctamente.")
    }
})