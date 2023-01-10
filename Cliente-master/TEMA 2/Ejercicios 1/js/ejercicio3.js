/* Realiza un programa que cree 100 elementos “checkbox” con números aleatorios.
Además, la página tendrá un botón “Marcar todos” y un botón “Desmarcar todos”,
con su correspondiente funcionalidad. */

const d = document

// funcion para crear checkbox
const crearCheckbox = () => {
    for (let i = 0; i < 100; i++) {
        // creo input
        const input = d.createElement("input")
        // le doy tipo checkbox
        input.type = "checkbox"
        // creo label
        const label = d.createElement("label")
        // le doy tipo texto
        label.type = "text"
        // creo numero aleatorio
        const numAle = parseInt(Math.random() * 100)
        // añado numero al label
        label.textContent = numAle
        // los añado a la pagina
        d.body.insertAdjacentElement("beforeend", label)
        d.body.insertAdjacentElement("beforeend", input) 
    }
}

crearCheckbox()

// coger boton marcar
const btnMarcar = d.querySelector("#marcar")
// coger boton desmarcar
const btnDesmarcar = d.querySelector("#desmarcar")

// funcion marcar todos
const marcar = () => {
    // selecciono checkbox
    let input = d.getElementsByTagName("input")
    // los marco
    for (let i = 0; i < input.length; i++) {
        input[i].checked = true
    }
}

// funcion desmarcar todos
const desmarcar = () => {
    // selecciono checkbox
    let input = d.getElementsByTagName("input")
    // los desmarco
    for (let i = 0; i < input.length; i++) {
        input[i].checked = false
    }
}

// evento pulsar boton marcar
btnMarcar.addEventListener("click", marcar)
// evento pulsar boton desmarcar
btnDesmarcar.addEventListener("click", desmarcar)