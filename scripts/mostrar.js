import { index } from "./index.js"

const lista = document.querySelector(".list-cards")

const cartas = [];

async function mostrarInfo() {

  const datos = await index.consulApiGet()

  if (Object.keys(datos).length !== 0) {
    datos.forEach(carta => {
      const card = document.createElement("li");

      card.innerHTML = `<div class="card">
        <img src="${carta.imagen}" />
        <div class="card-container--info">
          <p>${carta.titulo}</p>
          <div class="card-container--value">
            <p>$ ${carta.precio}</p>
            <a href="#" id="${carta.id}"><img src="./assets/icnDel.png" /></a>
          </div>
        </div>
      </div>`;

      lista.appendChild(card);
    })

  } else {

    const li = document.createElement("li");
    li.innerHTML = "<h1>Sin resultados</h1>";
    lista.appendChild(li);
  }

  agregareventos()
}

function agregareventos() {

  document.querySelector('.list-cards').addEventListener('click', function (event) {

    if (event.target && event.target.closest('a')) {

      event.preventDefault();

      const id = event.target.closest('a').id;

      index.consulApiDel(id);

      window.location.href = "https://alura-geek-ten.vercel.app/"
    }
  });
}

mostrarInfo()