/* Realiza un programa que cuando se pulse un botón con el texto “Nuevo número”,
añada un elemento con un número aleatorio a una lista desordenada (elemento UL). */
const d = document

const button = d.querySelector("#nuevoNumero")

/* button.addEventListener("click", function() {
    const lista = d.querySelector("ul")
    let numero = parseInt(Math.random()*100)
    lista.insertAdjacentHTML("afterbegin", "<li>" + numero + "</li>")
}) */

const numAle = () => {
    const numeroAle = parseInt(Math.random() * 101)

    const ul = d.querySelector("#ul")
    const li = d.createElement("li")
    li.style.color = "rgb("+parseInt(Math.random()*256)+","
                            +parseInt(Math.random()*256)+","
                            +parseInt(Math.random()*256)+")"

    li.textContent=numeroAle
    ul.insertAdjacentElement("afterbegin", li)
}

button.addEventListener("click", numAle)
