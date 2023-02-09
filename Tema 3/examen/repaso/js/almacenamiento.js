"use strict"

let arrayNombrePuntuaciones = []
let btnGuardar = document.querySelector("#guardarBtn")

window.addEventListener("load", (e) => {
    if(!localStorage.getItem("js")) {
        localStorage.setItem("js", JSON.stringify(arrayNombrePuntuaciones))
    } else {
        pintarPuntuacion()
    }
})

btnGuardar.addEventListener("click", (e) => {
    introducirPuntuacion()
})

function introducirPuntuacion() {
    arrayNombrePuntuaciones = JSON.parse(localStorage.getItem("js"))
    let nombre = document.querySelector("#nombre")
    let nota = document.querySelector("#puntos")
    let objeto = {
        nombre: nombre.value,
        nota: nota.value
    }
    arrayNombrePuntuaciones.push(objeto)
    localStorage.setItem("js", JSON.stringify(arrayNombrePuntuaciones))
    pintarPuntuacion()
}

// borra todas las filas de la tabla cada vez que se pinta para volver a pintar las nuevas introducidas + las anteriores
function comprobacionTabla() {
    let tr = document.querySelectorAll(".filas")
    if(tr != null) {
        tr.forEach(element => {
            element.remove()
        })
    }
}

function pintarPuntuacion() {
    comprobacionTabla()
    let tabla = document.querySelector("table")
    arrayNombrePuntuaciones = JSON.parse(localStorage.getItem("js"))
    arrayNombrePuntuaciones.sort((a, b) => b.nota - a.nota)
    let long = arrayNombrePuntuaciones.length
    if(long > 3) {
        long = 3
    }
    for(let i = 0; i < long; i++) {
        let trFila = document.createElement("tr")
        trFila.classList.add("filas")
        let tdNombre = document.createElement("td")
        let tdNota = document.createElement("td")
        tdNombre.textContent = arrayNombrePuntuaciones[i].nombre
        tdNota.textContent = arrayNombrePuntuaciones[i].nota
        trFila.appendChild(tdNombre)
        trFila.appendChild(tdNota)
        let borrar = document.createElement("input")
        borrar.type = "button"
        borrar.value = "X"
        borrar.addEventListener("click", (e) => {
            arrayNombrePuntuaciones.splice(i, 1)
            localStorage.setItem("js", JSON.stringify(arrayNombrePuntuaciones))
            comprobacionTabla()
            pintarPuntuacion()
        })
        trFila.appendChild(borrar)
        tabla.appendChild(trFila)
    }

}