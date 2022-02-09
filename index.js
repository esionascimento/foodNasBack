const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
require("./src/database");

const routers = require('./src/routes');
const middleError = require('./src/middlewares/error');

const port = process.env.PORT || 3001
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (_req, res) => {
  res.render('home');
});

const corsOptions ={
  origin: process.env.ORIGIN_CORS,
  credentials:true, //access-control-allow-credentials:true
  optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(routers);
app.use(middleError);

/* app.get('/', (_req, res) => {
  return res.status(200).json("Home");
}); */

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
