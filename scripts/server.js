const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const router = jsonServer.router('db.json'); // Archivo db.json con los datos
const middlewares = jsonServer.defaults();

// Middleware de JSON Server
app.use(middlewares);

// Servir el archivo HTML estático
app.use(express.static(path.join(__dirname, '../')));

// Rutas de la API
app.use('/api', router);

// Ruta para el index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// Exportar la aplicación para serverless
module.exports = app;

