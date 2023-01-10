/*

Crea una función para dibujar un patrón de diente de sierra inverso en un cuadro de texto.
Con un carácter y un número que indique el mayor número de caracteres en la base (inversa)
del patrón.
Ejemplo 1. Datos de entrada: 'A' y 5
AAAAA
AAAA
AAA
AA
A

*/

function miFuncion(letra,numero){

    for(let i=numero; i>=1; i--){
      

        for(let a=0; a<i; a++){

            document.write(letra);
        }

        document.write("</br>");
    }
}
miFuncion("A",5);


