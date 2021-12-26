const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const routers = require('./api/routes');
const middleError = require('./api/middlewares/error');

const app = express();
const corsOptions ={
  origin: process.env.ORIGIN_CORS,
  credentials:true, //access-control-allow-credentials:true
  optionSuccessStatus:200
}

const port = process.env.PORT || 3001

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(routers);
app.use(middleError);

app.get('/', (_req, res) => {
  return res.status(200).json("Home");
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
