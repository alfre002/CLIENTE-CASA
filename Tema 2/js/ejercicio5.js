/* Realiza un programa que mediante eventos y el uso del objeto event, te muestre en todo
momento la posición actual del ratón en pantalla. */

// selecciono x e y
const p = document.querySelector("#p")

addEventListener("mousemove", (event) => p.innerHTML = "Posición X: " + event.clientX +
                                                        "<br>Posición Y: " + event.clientY)