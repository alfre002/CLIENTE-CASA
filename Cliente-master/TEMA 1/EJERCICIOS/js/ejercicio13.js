/* Programa una función que calcule el factorial de un número (El factorial de un entero positivo
n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe.
miFuncion(5) devolverá 120. */

function factorial(num) {
    let suma = 1;
    for (let i = 1; i <= num; i++) {
        suma *= i;
    }
    console.log(suma);
}

factorial(5)