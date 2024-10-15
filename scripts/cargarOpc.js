
async function cargaOpc() {

    try {

        const consulta = await fetch("https://api-alura-geek-n7j2z9506-char33s-projects.vercel.app/imagenes", {
            method: 'GET',  // También podría ser 'POST', 'HEAD'
            mode: 'no-cors',
        })

        const lista = document.querySelector("[data-img]")

        const opciones = await consulta.json()

        opciones.forEach(opcion => {
            const option = document.createElement('option');
            option.textContent = opcion.nombre;
            option.setAttribute('data-url', opcion.url);
            lista.appendChild(option);
        });
    } catch (error) {
        console.log("Error: " + error)
    }
}

cargaOpc()