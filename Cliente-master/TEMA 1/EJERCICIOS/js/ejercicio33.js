/* Programa una función que valide que un texto sea un nombre válido, p.e. miFuncion (“Javier
Ferrer”) devolverá verdadero. NOTA: No puede haber números ni caracteres especiales como
¡ o ¿ */

const validarNombre = (nombre = undefined,apellido = undefined)=>{
    let regularNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    if ( !regularNombre.test(nombre))return console.log("Nombre no valido");
    if ( !regularNombre.test(apellido))return console.log("Apellido no valido");
    else if(regularNombre.test(nombre) && regularNombre.test(apellido)) {return console.log(`Nombre : "${nombre} ${apellido}" valido`)};
}
validarNombre("Fernando","Romero");
