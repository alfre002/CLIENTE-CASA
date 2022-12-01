/* Realiza una web con un cuadro de texto y dos botones ("Crear botones" y "Reiniciar"):
• El usuario introduce un número N y pulsa en "Crear botones" y se crean N botones entre
los dos anteriores [3p] con el texto rgb(aleatorio,aleatorio,aleatorio) y ese color de fondo
[1p].
• Al pulsar sobre alguno de los nuevos botones creados de forma dinámica, el fondo de la
web cambiará a ese color [4p]
• Al pulsar sobre "Reiniciar" volverá todo a como estaba al principio.[2p] */

const d = document

// CREAR BOTONES 
// ----------------------------------------------------------------------------------------------------------------------

// selecciono boton crear botones
const btnCrearBotones = d.querySelector(".crearBotones")

// funcion crear botones
const crearBotones = () => {
    let nBotones = d.querySelector(".inputNBotones").value
    for(let i = 0; i < nBotones; i++) {
        // crear boton
        const boton = d.createElement("button")
        // color aleatorio
        const colorAle = "rgb(" +
        parseInt(Math.random() * 256) +
        "," +
        parseInt(Math.random() * 256) +
        "," +
        parseInt(Math.random() * 256) +
        ")"
        // meterle al boton texto, color de fondo y clase
        boton.style.backgroundColor = colorAle
        boton.textContent = colorAle
        boton.className = "btnsColor"
        // meter boton entre los 2 botones principales
        btnCrearBotones.insertAdjacentElement("afterend", boton)

        // CAMBIAR COLOR DE FONDO
        // ------------------------------------------------------------------------------------------------------------------

        // seleccionar todos los botones de color
        const btnsColor = d.getElementsByClassName("btnsColor")

        // evento click boton color
        for(let boton of btnsColor) {
            boton.addEventListener("click", function() {
                d.body.style.backgroundColor = boton.textContent
            })
        }

        // selecciono boton reiniciar
        const btnReiniciar = d.querySelector(".reiniciar")

        // evento reiniciar
        btnReiniciar.addEventListener("click", function() {
            for(let boton of btnsColor) {
                boton.remove()
            }
            d.body.style.backgroundColor = "white"
            d.querySelector(".inputNBotones").value = ""
        })
    }
}

// evento crear botones
btnCrearBotones.addEventListener("click", crearBotones)
// ------------------------------------------------------------------------------------------------------------------