/* Programa una clase llamada Pelicula.
La clase recibirá un objeto al momento de instanciarse con los siguientes datos: id de la película
en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
- Todos los datos del objeto son obligatorios.
- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
- Valida que el título no rebase los 100 caracteres.
- Valida que el director no rebase los 50 caracteres.
- Valida que el año de estreno sea un número entero de 4 dígitos.
- Valida que el país o paises sea introducidos en forma de arreglo.
- Valida que los géneros sean introducidos en forma de arreglo.
- Valida que los géneros introducidos esten dentro de los géneros aceptados*.
- Crea un método estático que devuelva los géneros aceptados*.
- Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
- Crea un método que devuelva toda la ficha técnica de la película.
- Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma
automatizada e imprime la ficha técnica de cada película.
* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime,
Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music,
Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */

class Pelicula {
    constructor(idPelicula, titulo, director, anyoEstreno, pais, genero, calificacion) {
        this.idPelicula = this.validarId(idPelicula)
        this.titulo = this.validarTitulo(titulo)
        this.director = this.validarDirector(director)
        this.anyoEstreno = this.validarAnyo(anyoEstreno)
        this.pais = this.validarPais(pais)
        this.genero = this.validarGenero(genero)
        this.calificacion = this.validarCalificacion(calificacion)
    }

    validarId(idPelicula) {
        let idValido = new RegExp(/[a-zA-Z]{2}[0-9]{7}/)
        return idValido.test(idPelicula) ? idPelicula: ""
    }

    validarTitulo(titulo) {
        let tituloValido = new RegExp(/.{2,100}/)
        return tituloValido.test(titulo) ? titulo: ""
    }

    validarDirector(director) {
        let directorValido = new RegExp(/.{1,50}/)
        return directorValido.test(director) ? director: ""
    }

    validarAnyo(anyoEstreno) {
        let anyoValido = new RegExp(/[0-9]{4}/)
        return anyoValido.test(anyoEstreno) ? anyoEstreno: ""
    }

    validarPais(pais) {
        let Array = []
        return typeof(pais)===typeof(Array) ? pais: []
    }

    validarGenero(genero) {
        let generos = Pelicula.generos()
        return generos.includes(genero) ? genero: ""
    }

    static generos(){
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
    }

    validarCalificacion(calificacion) {
        let calificacionValida = new RegExp((/[0-9]{1,2}\.{0,1}[0-9]{0,1}/))
        return calificacionValida.test(calificacion) ? calificacion : ""
    }

    fichaTecnica() {
        return {
            idPelicula: this.idPelicula,
            titulo: this.titulo,
            director: this.director,
            anyoEstreno: this.anyoEstreno,
            pais: this.pais,
            genero: this.genero,
            calificacion: this.calificacion

        }
    }
}

let pelicula1 = new Pelicula("JO1234567", "Joker", "Steven Spielberg", 2020, ["España", "Italia"], 
"Thriller", 9.5)
let pelicula2 = new Pelicula ("AB1234567","Amanece","Almodovar", 2008, ("España"),"Comedy",7)

let peliculas = [pelicula1, pelicula2]

console.log(pelicula1.fichaTecnica())
console.log(pelicula2.fichaTecnica())