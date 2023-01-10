/* Programa una función que determine si un número es par o impar, pe. miFuncion(29)
devolverá Impar. */

const odd = num => (num % 2 !== 0) ? console.log(`${num} es impar`) : 
console.log(`${num} es par`);
odd(24)