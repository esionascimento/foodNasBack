const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

/* const routers = require('./api/routes'); */
/* const middleError = require('./api/middlewares/error'); */

const app = express();

const port = process.env.PORT;

app.use(bodyParser.json());
/* app.use(routers); */
/* app.use(middleError); */

// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
