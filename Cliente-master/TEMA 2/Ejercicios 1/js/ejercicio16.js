/*
1) SUBMIT DESHABILITADO HASTA QUE SE INTRODUZCAN LOS CAMPOS
2) VALIDACIONES:
    USERNAME: NO PUEDE TENER ESPACIOS NI CARACTERES .;,?!
    EMAIL: HOTMAIL, GMAIL Y YAHOO
    PASS: 5 CARACTERES, 1 MAY, 1 MIN Y 1 NUM
3) AL PULSAR SUBMIT:
    MENSAJES DE ERROR (FUNCION)
    CLASE CSS (FUNCION)
    DESAPAREZCA 3 SEG (FUNCION)
    MENSAJE PERSONALIZADO DEBAJO DEL INPUT
*/

const d = document

// funcion validar username
const validar = () => {
    // recojo campos
    const usuario = d.getElementById("username")
    const email = d.getElementById("email").value
    const contraseña = d.getElementById("password")

    // expresiones regulares
    const usuarioValido = new RegExp(/^[ ;,?!]*./)
    const emailValido = new RegExp(/.+@.+[.].+/)
    const contraseñaValidO       

    // tests
    const errores = d.getElementsByClassName("error")

    // nombre
    if(!usuarioValido.test(usuario)) {
        // mostrar error debajo del campo
        const errorNombre = d.createElement('label')
        errorNombre.textContent = "Nombre inválido."
        errores[0].appendChild(errorNombre)
    }

    // email
    const dominio = email.split('@')[1].split('.')[0]
    if(emailValido.test(email)) {
        // comprobar si el dominio es válido
        const listaDominios=["hotmail","gmail","yahoo"]
        if(!listaDominios.includes(dominio)) {
            // si el dominio no es válido se muestra un error debajo del campo
            const errorEmail = d.createElement('label')
            errorEmail.textContent = "Email inválido."
            errores[1].appendChild(errorEmail)
        }
    }
}

// evento pulsar submit
const submit = d.getElementById("submit")

submit.addEventListener("click", function(e) {
    e.preventDefault()
    validar()
})