/* Realiza un programa que cuando se presione una tecla, calcule cuántos DNIs de 4 cifras
(del 0001 al 9999) tienen esa letra y te mostrará los DNIs y sus letras en un elemento
HTML(Ejemplo un <p> y una lista desplegable) . */

//variable letra
let letraPulsada = ""

// selecciono input
const input = document.querySelector("#input")

// selecciono select
const select = document.querySelector("#select")

// recojo letra pulsada y la añado al name del select
input.addEventListener("keypress", (event) => {
    letraPulsada = event.key
    // calcular dni con esa letra
    for (let i = 1; i < 10000; i++) {
        letraDNI(i)
    }
})

// funcion letra dni
const letraDNI = (dni) => {
    var cadena="TRWAGMYFPDXBNJZSQVHLCKET";
    var posicion = dni%23;
    var letra = cadena.substring(posicion,posicion+1)
    if(letra==letraPulsada) {
        // crear option con el dni correspondiente
        const option = document.createElement("option")
        option.textContent = dni + " - " + letra
        // añadir option al select
        select.insertAdjacentElement("beforeend", option)
    }       
}