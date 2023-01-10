const d = document

// recojo parrafos
const p = d.getElementsByClassName("p")

// desaparecer
for (let i = 0; i < p.length; i++) {
    p[i].addEventListener("mouseout", function() {
        p[i].style.display = "none"
    })
}

// aparecer
const btnReaparecer = d.querySelector("#btn")

    //evento
for (let i = 0; i < p.length; i++) {
    btnReaparecer.addEventListener("click", function() {
        p[i].style.display = "block"
    })    
}

// eliminar
for (let i = 0; i < p.length; i++) {
    p[i].addEventListener("dblclick", function() {
        p[i].remove()
    })
}
