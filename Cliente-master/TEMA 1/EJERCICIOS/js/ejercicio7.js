// Mostrar todos los números divisores de un número introducido por el usuario.

let num = parseInt(prompt("Introduzca un número."))

for (let i = 2; i < num; i++) {
    if(num%i==0) {
        console.log(i)
    }
}