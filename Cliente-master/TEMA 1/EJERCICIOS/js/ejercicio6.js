// Mostrar todos los números impares que hay entre dos números introducidos por el usuario. 

let num1 = parseInt(prompt("Introduzca un número."))
let num2 = parseInt(prompt("Introduzca otro número."))

if (num1 < num2) {
    for (let index = num1+1; index < num2; index++) {
        if (index%2!=0) {
        console.log(index)
        }
    }
} else {
    for (let index = num2+1; index < num1; index++) {
        if (index%2!=0){
        console.log(index)
        }
    }
}