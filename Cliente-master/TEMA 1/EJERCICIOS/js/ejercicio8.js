// Mostrar la tabla de multiplicar de un número introducido por pantalla.

let num = parseInt(prompt("Introduce un número."))

for ( let i = 1; i < 11; i++ ) {
    let aux = num*i
    console.log(`${num} * ${i} = ${aux}`)
}