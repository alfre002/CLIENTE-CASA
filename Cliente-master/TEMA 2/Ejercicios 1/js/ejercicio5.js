/* Realiza un programa que mediante eventos y el uso del objeto event, te muestre en todo
momento la posición actual del ratón en pantalla.
Para mostrarlo modificaremos de forma dinámica un elemento HTML (Ejemplo, un <p>) que
nos muestre la posición actual del ratón. */

// cojo el body
const html = document.querySelector("#html")

// cojo el parrafo
const p = document.querySelector("#p")

html.addEventListener("mousemove", (event) => p.innerHTML = "Posición X del puntero: " + event.clientX + 
"<br>Posición Y del puntero: " + event.clientY)