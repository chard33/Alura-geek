import { index } from "./index.js"

const formulario = document.querySelector(".formulario")

async function crearCarta(evt) {

    evt.preventDefault()

    const nombre = document.querySelector("[data-nom]").value
    const precio = document.querySelector("[data-pre]").value
    const imagen = document.querySelector("[data-img]")

    index.consulApiPost(nombre, precio, imagen[imagen.selectedIndex].getAttribute("data-url"))
}

formulario.addEventListener("submit", crearCarta)