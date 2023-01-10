/* Realiza un programa que al hacer doble click en la pantalla del navegador, cambie el
fondo a un color aleatorio. */

// funcion cambia color
const cambiaColor = () => {
    document.body.style.backgroundColor = "rgb("+parseInt(Math.random()*256)+","
    +parseInt(Math.random()*256)+","
    +parseInt(Math.random()*256)+")"
}

//evento doble click
document.addEventListener("dblclick", cambiaColor)