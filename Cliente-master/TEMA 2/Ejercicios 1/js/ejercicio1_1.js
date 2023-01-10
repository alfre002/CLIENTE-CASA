/* Añadir cada número a un botón, si pulsas un botón te sale un alert con el número del botón */
const d = document
const aux = false

const crearBoton = d.querySelector("#crearBoton")

const insertarNumero = () => {
    const boton = d.createElement("button")
    const numAle = parseInt(Math.random()*1000)
    boton.textContent = numAle
    d.body.appendChild(boton)
    boton.addEventListener("click", function() {
        alert(boton.textContent)
    })
}

crearBoton.addEventListener("click", insertarNumero)