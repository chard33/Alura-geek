
const url = "https://api-alura-geek-wheat.vercel.app/cartas"

async function consulApiGet() {
  try {
    const consulta = await fetch(url)

    return consulta.json()

  } catch (error) {
    console.log("Error: " + error)
  }
}

async function consulApiPost(tit, pre, img) {
  try {
    const consulta = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: 'follow', // manual, *follow, error
      //  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
        titulo: tit,
        precio: pre,
        imagen: img,
        icono: "./assets/icnDel.png"
      }) // body data type must match "Content-Type" header
    });

    return consulta.json(); // parses JSON response into native JavaScript objects)

  } catch (error) {
    console.log("Error: " + error)
  }
}

async function consulApiDel(id) {
  try {

    const consulta = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const datos = await consulta.json()

  } catch (error) {
    console.log("Error: " + error)
  }
}

export const index = {
  consulApiGet, consulApiPost, consulApiDel
}