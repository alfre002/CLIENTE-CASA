/* Programa una función que valide que un texto sea un email válido, p.e. miFuncion
(“javier.ferrer@iesmartinezm.es”) devolverá verdadero. NOTA: caracteres, números, puntos
guión alto y bajo+@+caracteres, números+.+al menos dos caracteres. */

const validarEmail = (email= undefined)=>{    
    const regularEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!regularEmail.test(email))return console.log('Email invalido');
    else return console.log(`email : ${email} aceptado`);
}
validarEmail("javier.ferrer@iesmartinezm.es");
validarEmail("javier.ferreiesmartinezm.es");
