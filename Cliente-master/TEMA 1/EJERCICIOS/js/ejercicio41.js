/* Programa una función que obtenga un numero aleatorio entre 501 y 600. */

const numAlea = (min, max) =>  parseInt(Math.random()*(max-min) + (min))

console.log(numAlea(501, 600))