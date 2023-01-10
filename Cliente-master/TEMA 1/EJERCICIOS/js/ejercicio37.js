/* Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el
primero almacena los números pares y en el segundo los impares, pe.
miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */

const paresImpares = (arrayNumeros = undefined) =>{
    const pares = []
    const impares = []
    const parImpar = {
        pares : pares,
        impares :impares
    }
    
    for (let i = 0; i< arrayNumeros.length; i++){
        if (i % 2 === 0 )pares.push(arrayNumeros[i]); 
        else {impares.push(arrayNumeros[i]) ;}
    }
    return console.log(parImpar);    
}
paresImpares([1,2,3,4,5,6,7,8,9,0]);
