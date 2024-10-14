const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Aquí puedes definir tu archivo db.json con los datos de la Fake API
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log(`JSON Server is running on port 3000`);
});

module.exports = server
