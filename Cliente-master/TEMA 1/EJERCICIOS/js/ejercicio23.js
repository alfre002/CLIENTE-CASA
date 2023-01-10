/* Programa una función que valide si una palabra o frase dada, 
es un palíndromo (que se lee igual en un sentido que en otro), 
pe. mifuncion("Salas") devolverá true.*/

const esPalindroma = (text="") => {
    let textoSinEspacios = ""
    let textoAlReves = ""
    let longitud = text.length
    for (let i = 0; i < text.length; i++) {
        if(text.charAt(i)!=' ') {
            textoSinEspacios += text.charAt(i)
        }
    }
    for (longitud; longitud >= 0; longitud--) {
        if(text.charAt(longitud)!=' ') {
            textoAlReves += text.charAt(longitud)
        }
    }

    if(textoSinEspacios==textoAlReves) {
        document.write("La frase es palíndroma.")
    } else {
        document.write("La frase no es palíndroma.")
    }
}

esPalindroma("oso soso")

// MÉTODO ÓPTIMO CON FUNCIONES
/* const esPalindromo = (frase) => {
  //Lo pasamos a minúsculas
  frase = frase.toLowerCase();
 
  //Le quitamos las tildes (no comprueba solo la primera ocurrencia porque tiene la g de global)
  frase = frase.replace(/á/g, "a");
  frase = frase.replace(/é/g, "e");
  frase = frase.replace(/í/g, "i");
  frase = frase.replace(/ó/g, "o");
  frase = frase.replace(/ú/g, "u");
 
  //Le quitamos espacios y carácteres especiales.
  frase = frase.replace(/[\W]/g, "");
 
  //Le damos la vuelta a la frase para compararla y reemplazamos las , por nada ya que al pasarlo de array a cadena, nos pone comas
  let fraseVolteada;
  fraseVolteada = frase.split("").reverse().join().replaceAll(",", "");
 
  if (frase == fraseVolteada) {
    return true;
  }
  return false;
};
 
let frase = "Salás";
console.log(esPalindromo(frase));
*/
