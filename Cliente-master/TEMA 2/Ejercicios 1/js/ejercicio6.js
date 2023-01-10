/* Realiza un programa con dos botones “Comenzar Saludos” y “Parar Saludos”. Al hacer
click en “Comenzar Saludos”, lance un setInterval que cada 5 segundos muestra un
“alert” con “Hola”. El botón “Parar Saludos” parará esa secuencia. */

// defino el intervalo
const intervalo = setInterval(function() {alert("Hola.")}, 5000)

// cojo boton comenzar saludos
const btnSaludar = document.querySelector("#saludar")

// funcion saludar
const saludar = () => {
    intervalo
}

// evento saludar
btnSaludar.addEventListener("click", saludar)

// cojo boton parar saludos
const btnParar = document.querySelector("#parar")

// funcion parar
const parar = () => {
    clearInterval(intervalo)
}

// evento parar
btnParar.addEventListener("click", parar)