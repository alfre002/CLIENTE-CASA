/*
 Programa una función para contar el número de veces que se repite una palabra en un texto
largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 */

const stringToArray = ( characters = "" , separator ) => ( !characters )?
"":characters.split ( separator ) ;
let example = "hola mundo adios mundo si mundo" , separator , result, count=0 ;
result = stringToArray ( example , separator = " " ) ;
for (let i = 0; i < result.length; i++) {
    if(result[i].includes("mundo")) {
        count++
    }
}

document.write(`La palabra se repite ${count} veces`)