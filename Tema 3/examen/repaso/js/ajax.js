/* Usa el fichero randomuser.me.100.json para “levantar” un JSON Server y obtener 10
imágenes de hombres o de mujeres (elige una opción en el selector) y muéstralas en el
navegador (no hace falta que borres las anteriores). Debes tener control de errores
mediante catch. [2p] */

const d = document;
const divUsuarios = d.querySelector(".contenedor");
const $btnMostrar = d.getElementById("mostrarBtn");

const mostrarUsuarios = (json) => {
  // recoger sexo seleccionado
  let sexo = d.getElementById("usuarios").value;
  if (sexo == "mujeres") {
    sexo = "female";
  } else {
    sexo = "male";
  }

  let usuarios = json;
  let cont = 0; // variable para solo sacar 10 usuarios

  usuarios.forEach((usuario) => {
    if (cont < 10 && usuario.gender == sexo) {
      let aux = parseInt(Math.random() * 2); // nº aleatorio - si es 0 no pinta y si es 1 sí pinta
      if (aux == 1) {
        // creo la imagen, le meto la url de la imagen del usuario y la añado al div de usuarios
        let img = d.createElement("img");
        let figure = d.createElement("figure")
        img.src = usuario.picture.large;
        figure.appendChild(img)
        divUsuarios.appendChild(figure);
        cont++;
      }
    }
  });
};

/* fetch("http://localhost:3000/results")
  .then((res) => res.json())
  .then((json) => {
    $btnMostrar.addEventListener("click", () => {
      mostrarUsuarios(json);
    });
  })
  .catch(error => console.error(error)) */

/* Usa el fichero reqres.in.users.json para “levantar” un JSON Server y crear un usuario con
un nombre, correo y una url de una imagen (puedes inventarte los datos y que la URL, por
ejemplo no sea válida). Debes tener en cuenta que el id que le asigne el programa debe
ser uno que no exista ya. Debes tener control de errores mediante catch. [2p] */

const $btnCrear = d.getElementById("crearBtn")

const nuevoID = (json) => {
    json[json.length-1].id++
}

const crearUsuario = (id) => {
    // recogemos los datos introducidos
    let nombre = d.getElementById("fName").value
    let apellido = d.getElementById("lName").value
    let email = d.getElementById("email").value
    let avatar = d.getElementById("avatar").value

    fetch("http://localhost:3000/data", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({id: id, email: email, first_name: nombre, last_name: apellido, avatar: avatar}),
    })
    .then(res => {
        console.log(res.status)
        return res
    })
    .then(response => response.json())
    .then(data => console.log(data));
}

/* fetch("http://localhost:3000/data")
  .then((res) => res.json())
  .then(json => nuevoID(json))
  .then((id) => {
    $btnCrear.addEventListener("click", () => {
        crearUsuario(id)
    })
  })
  .catch(error => console.error(error)) */

/*   Envía un formulario con un campo y un botón mediante el servicio formsubmit.co
(https://formsubmit.co/ajax/your@email.com) de forma asíncrona mediante fetch. Debes
tener control de errores mediante catch. [1p] */

const url = "https://formsubmit.co/ajax/amarrui2808@iesmartinezm.es";
const form = document.querySelector(".miFormulario");
const post = (url, body) => fetch(url, {
    method: "POST",
    body
});

form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    fetchFormulario(id);
})


const id = "amarrui2808@iesmartinezm.es";
const fetchFormulario = async (id) => {
    try {
        const res = await fetch(`https://formsubmit.co/ajax/${id}`, {
            method: "POST",
            body: new FormData(form)
        });
        const json = await res.json();
        console.log(json);
    } catch (err) {
        console.error(err);
    }
}