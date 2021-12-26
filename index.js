const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

//forma do docker entender que unica coisa q tem que refazer, e repasar porta para minha maquina, nao rodar somente interno no docker
const HOST = '0.0.0.0';

const routers = require('./api/routes');
const middleError = require('./api/middlewares/error');

const app = express();
const corsOptions ={
  origin: process.env.ORIGIN_CORS,
  credentials:true, //access-control-allow-credentials:true
  optionSuccessStatus:200
}
const port = process.env.PORT;

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(routers);
app.use(middleError);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
