/* Realiza un programa con dos botones “Comenzar Saludos” y “Parar Saludos”. Al hacer
click en “Comenzar Saludos”, lance un setInterval que cada 5 segundos muestra un
“alert” con “Hola”. El botón “Parar Saludos” parará esa secuencia. */

// seleccionar botones
const btnSaludar = document.querySelector("#saludar")
const btnParar = document.querySelector("#parar")

// intervalo
let idIntervalo
const intervalo = () => {
    idIntervalo = setInterval(function() {alert("hola")}, 5000)
}

// parar intervalo
const parar = () => {
    clearInterval(idIntervalo)
}

// evento saludar
btnSaludar.addEventListener("click", intervalo)

// evento parar
btnParar.addEventListener("click", parar)