const jsonServer = require('json-server');
const path = require('path');
const express = require('express'); // Necesitamos express para manejar el archivo HTML

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Aquí defines tu archivo db.json con los datos de la Fake API
const middlewares = jsonServer.defaults();

// Servir el archivo HTML (index.html)
server.use(express.static(path.join(__dirname, '../'))); // Sirve archivos estáticos desde la raíz (donde está index.html)

// Usar los middlewares por defecto de JSON Server
server.use(middlewares);

// Rutas de la API basada en db.json
server.use(router);

// Arrancar el servidor
server.listen(3000, () => {
  console.log(`JSON Server is running on port 3000`);
});

module.exports = server;
