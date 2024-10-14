const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults();

// Middleware de JSON Server
app.use(middlewares);
server.use(middlewares)
// Servir el archivo HTML estático
app.use(express.static(path.join(__dirname, '../')));

// Rutas de la API
app.use('/api', router);

// Ruta para el index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// Add this before server.use(router)
server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}))
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})

// Export the Server API
module.exports = server

// Exportar la aplicación para serverless
module.exports = {app, server};

