// Indica si un NIF es válido o no.

function dniValido() {
    let num = [0,1,2,3,4,5,6,7,8,9]
    let abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q",
                "R","S","T","U","V","W","X","Y","Z"]
    let dni = prompt("Introduzca su DNI.")
    if(dni.length == 9) {
        for (let i = 0; i < dni.length - 1; i++) {
            if(num.includes(parseInt(dni.charAt(i)))) {
            } else {
                console.log("Los 8 primeros caracteres deben ser números.")
                break;
            }
        }
        if(abc.includes(dni.charAt(8))) {
            console.log("El DNI es válido.")
        } else {
            console.log("El último caracter debe ser una letra.")
        }
    } else {
        console.log("El DNI debe contener 9 caracteres.")
    }
}

dniValido()