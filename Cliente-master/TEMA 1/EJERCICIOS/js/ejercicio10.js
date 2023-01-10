/*  Programa una función que determine si un número es primo (aquel que solo es divisible por
sí mismo y 1) o no, pe. miFuncion(7) devolverá true */

let num = parseInt(prompt("Introduzca un numero"));

const esPrimo = num => { for (let index = 2; index < num - 1; index++) {
 
    if (num % index == 0) {
 
      return false;
    }
  }
  return true;
}
 
if (esPrimo(num)) {
  alert(`${num} es primo`);
} else {
  alert(`${num} no es primo`);
}
 


