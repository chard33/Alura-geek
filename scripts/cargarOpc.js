
async function cargaOpc() {

    try {

        const consulta = await fetch("https://apitest-six-jet.vercel.app/imagenes")

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