/* 
En un vector de números, indicar:
a. El número de elementos del vector.
b. Cuántos son pares y cuántos impares y cuáles son.
c. La suma de todos los números negativos.
d. El producto de todos los números positivos.
e. Cuántos son primos y cuáles son.
f. Los números que ocupan las posiciones pares del vector.
g. El número mayor.
h. El número menor.
i. La media de todos los números, los números que están por encima y los que están por
debajo.
j. El vector ordenado de mayor a menos y viceversa.
k. Buscar un valor introducido por el usuario e indicar si existe o no.
*/

let numeros = [2, 27, 330, -45, -0.1]

const nElementos = numeros.length
let productoPositivo = 1, max = numeros[0], min = numeros[0],
    media = 0

// a. numero de elementos del array
console.log(`Hay ${numeros.length} elementos en el array de números`)

// b. numeros pares e impares
const arrayPar = numeros.filter(num => num % 2 == 0)
const arrayImpar = numeros.filter(num => num % 2 != 0)
console.log(`Hay ${arrayPar.length} números pares: ${arrayPar}`)
console.log(`Hay ${arrayImpar.length} números impares: ${arrayImpar}`)

// c. suma negativos
const sumaNegativos = v => {
    const negativos = v.filter((v) => v<0) // creo un array solo con negativos
    const suma = negativos.reduce((acumulador, valorActual) => acumulador + valorActual) // los sumo
    return suma
}

// d. producto positivos
const productoPositivos = () => {
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i]>0) {
            productoPositivo *= numeros[i]
        } 
    }
    document.write(`<br>El producto de todos los números positivos es ${productoPositivo}.`)
}

// e. primos
const esPrimo = n => {
    for(let i = 2; i < Math.abs(n); i++) {
        if(n%i===0) return false
    }
    return true
}

// g. h. max y min
const mayorYMenor = () => {
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i]>max) {
            max = numeros[i]
        } else if(numeros[i]<min) {
            min = numeros[i]
        }
    }
    document.write(`<br>El número mayor del array es ${max} y el menor es ${min}.`)
}

// i. calcula media
const calculaMedia = () => {
    for (let i = 0; i < numeros.length; i++) {
        media += numeros[i]
    }
    media /= numeros.length
    document.write(`<br>La media de los números del array es ${media}.`)
}

const ordenaArray = () => {
    let arrayOrdenado = numeros.sort()
    document.write(`<br>Array ordenado: ${arrayOrdenado}`)
}

sumaNegativos()
productoPositivos()
// primos
let primos = numeros.filter(n => esPrimo(n)) // filtra los primos
let noPrimos = numeros.filter(n => !(esPrimo(n))) // filtra numeros no incluidos en primos
console.log(`Los primos son: \n${primos}\nLos no primos son: \n${noPrimos}`)
mayorYMenor()
calculaMedia()
ordenaArray()