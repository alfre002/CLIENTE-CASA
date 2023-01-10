/* Programa una función que dada una fecha válida determine cuantos años han pasado hasta
el día de hoy, pe. miFuncion(new Date(1984,4,23)) o miFuncion (“01/12/2010”) */

const diasPasados = (fecha = undefined)=>{
    if(!(fecha instanceof Date)) return console.log('El valor ingresado no es una fecha válida.');
    
    let calculoAnios = new Date().getTime() - fecha.getTime();
    let transMiles = 1000*60*60*24*365;
    let anios = Math.floor(calculoAnios/transMiles);
    return (Math.sign(anios) === -1)
    ? console.log(`Faltan ${Math.abs(anios)} años para el ${fecha.getFullYear()}.`)
    :(Math.sign(anios) === 1)
     ?console.log(`Pasaron ${anios} años desde ${fecha.getFullYear()}.`)
     : console.log (`No hay diferencia en el año actual ${fecha.getFullYear()}.`)
}
diasPasados(new Date(1984,4,23))