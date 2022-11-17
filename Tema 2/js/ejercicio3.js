/* Realiza un programa que cree 100 elementos “checkbox” con números aleatorios.
Además, la página tendrá un botón “Marcar todos” y un botón “Desmarcar todos”,
con su correspondiente funcionalidad. */

const d = document

// selecciono marcar y desmarcar
const btnMarcar = d.querySelector("#marcar")
const btnDesmarcar = d.querySelector("#desmarcar")

// creo inputs tipo checkbox y label con numeros aleatorio
for (let i = 0; i < 100; i++) {
    const input = d.createElement("input")
    input.type = "checkbox"
    const label = d.createElement("label")
    label.type = "text"
    label.textContent = parseInt(Math.random() * 100)
    d.body.insertAdjacentElement("beforeend", input)
    d.body.insertAdjacentElement("beforeend", label)
}

// funcion marcar
const marcar = () => {
    // selecciono los inputs
    const inputs = d.getElementsByTagName("input")
    // cambio a marcado
    for(let input of inputs){
        input.checked = true
    }
}

// funcion desmarcar
const desmarcar = () => {
    // selecciono los inputs
    const inputs = d.getElementsByTagName("input")
    // cambio a marcado
    for(let input of inputs){
        input.checked = false
    }
}

// evento marcar todos
btnMarcar.addEventListener("click", marcar)

// evento desmarcar todos
btnDesmarcar.addEventListener("click", desmarcar)