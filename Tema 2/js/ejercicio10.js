/* Realiza un formulario donde se pueda introducir y enviar un DNI con letra. El formulario
deberá validar si la letra es correcta al:
a) Perder el foco del campo de texto donde se introduce el DNI.
b) Enviar el formulario, cancelando el envío si el formato no es correcto. */

// selecciono boton enviar
const btnEnviar = document.querySelector("#enviar")

// selecciono input
const input = document.querySelector("#dni")

// selecciono formulario
const formulario = document.querySelector("#formulario")

// funcion validar letra dni
const letraDNI = (dni) => {
    // cojo la letra del dni
    var letraIntroducida = dni.slice(-1)
    // le quito la letra al dni
    dni = dni.substring(0, dni.length-1)
    var cadena="TRWAGMYFPDXBNJZSQVHLCKET";
    var posicion = dni%23;
    var letra = cadena.substring(posicion,posicion+1)
    if(letraIntroducida==letra) {
        console.log("Correcto")
        return true
    } else {
        console.log("DNI incorrecto")
    }
}

// evento perder foco
input.addEventListener("blur", function() {
    letraDNI(dni.value)
})

// evento enviar
btnEnviar.addEventListener("click", function() {
    if(letraDNI(dni.value)) {
        document.forms.formulario.submit()
    }
})