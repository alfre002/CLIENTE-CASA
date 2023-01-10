/* Programa una función que dada una cadena de texto cuente el número de vocales y
consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */

const contarLetras = (texto = undefined)=>{
    if (typeof(texto) !== "string") return console.log('Lo ingresado no es un texto');
    let textocopy = texto.replace(/ /g,'');
    let vocales = new RegExp(/[aeiou]/ig);
    let consonante = /[^aeiou]/ig;
    let cantidadVocales = textocopy.match(vocales).length;
    let cantidadConsonantes = textocopy.match(consonante).length;
    
   return  console.log(`En el texto ${texto} hay ${cantidadVocales} vocales y ${cantidadConsonantes} consonantes`);
}    
contarLetras('Hola Mundo');