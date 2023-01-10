/* Comprueba que una cadena empieza con las letras “m” o “d” y además termina con las letras
“a” o “o”. Realiza el ejercicio con funciones de cadena y con expresiones regulares. */

const r = /^[md].*[ao]$/gi
document.write(r.test("maA"))