/* 
• El usuario introduce un número N y pulsa en "Crear botones" y se crean N botones entre
los dos anteriores [3p] con el texto rgb(aleatorio,aleatorio,aleatorio) y ese color de fondo
[1p].
• Al pulsar sobre alguno de los nuevos botones creados de forma dinámica, el fondo de la
web cambiará a ese color [4p]
• Al pulsar sobre "Reiniciar" volverá todo a como estaba al principio.[2p] */

const d = document;

// selecciono boton crearBotones
const btnCrearBotones = d.querySelector(".crearBotones");

// funcion crear botones
const crearBotones = () => {
  for (let i = 0; i < letraPulsada; i++) {
    // creo boton
    const boton = d.createElement("button");

    // creo un color aleatorio
    const colorAle =
      "rgb(" +
      parseInt(Math.random() * 256) +
      "," +
      parseInt(Math.random() * 256) +
      "," +
      parseInt(Math.random() * 256) +
      ")";

    // añado texto
    boton.textContent = colorAle;

    // cambio color de fondo
    boton.style.backgroundColor = colorAle;

    // añado clase
    boton.className = "botonesColor";

    // lo meto en el documento
    d.body.insertAdjacentElement("afterend", boton);

    // evento pulsar boton de color - recojo en un array todos los botones mediante su clase y hago un for of para ver cual es el que
    // se ha clickado para cambiar el color de fondo
    const botonesColor = d.getElementsByClassName("botonesColor");
    for (let boton of botonesColor) {
      boton.addEventListener("click", function () {
        d.body.style.backgroundColor = boton.textContent;
      });
    }

    // selecciono boton reiniciar
    const btnReiniciar = d.querySelector(".reiniciar");

    // funcion reiniciar
    const reiniciar = () => {
      // color de fondo por defecto
      d.body.style.backgroundColor = "white";

      // borrar botones de colores
      for (let boton of botonesColor) {
        boton.remove();
      }
    };

    // evento reiniciar
    btnReiniciar.addEventListener("click", reiniciar);
  }
};

// selecciono input
const input = d.querySelector(".inputNBotones");

// evento para recoger numero introducido en el input
input.addEventListener("keypress", (event) => {
  letraPulsada = event.key;
  // evento para crear botones
  btnCrearBotones.addEventListener("click", crearBotones);
});