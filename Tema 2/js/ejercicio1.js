/* Realiza un programa que cuando se pulse un botón con el texto “Nuevo número”,
añada un elemento con un número aleatorio a una lista desordenada (elemento UL). */

// selecciono el boton
const btnNuevoNumero = document.querySelector("#boton")
// selecciono la lista
const lista = document.querySelector("#lista")

// funcion añadirNumero
const añadirNumero = () => {
    const numAle = parseInt(Math.random() * 1000)
    // creo li
    const li = document.createElement("li")
    // meto li en ul con el numero aleatorio
    li.textContent = numAle
    lista.insertAdjacentElement("afterbegin", li)
}

// evento click boton
btnNuevoNumero.addEventListener("click", añadirNumero)