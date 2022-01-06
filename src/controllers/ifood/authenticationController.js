const express = require('express');
const rescue = require('express-rescue');
const axios = require('axios')
const qs = require('qs');
require('dotenv').config();

const routerAuthentication = express.Router();

routerAuthentication.post('/usercode', rescue(async (req, res, _next) => {
  const { clientId } = req.body;
  const APIPOST = axios.create({
    baseURL: 'https://merchant-api.ifood.com.br',
    headers: {
      'Host': 'merchant-api.ifood.com.br',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': '45'
    }
  });
  try {
    const {data} = await APIPOST.post('/authentication/v1.0/oauth/userCode', qs.stringify({
      clientId
    }))
    return res.json({data});
  } catch (error) {
    return res.json({error});
  }
}));

routerAuthentication.get('/token/centralized', rescue(async (_req, res, _next) => {
  const grantType = process.env.GRANT_TYPE;
  const clientSecret = process.env.CLIENT_SECRET;
  const clientId= process.env.CLIENT_ID;
  const APIPOST = axios.create({
    baseURL: 'https://merchant-api.ifood.com.br',
    headers: {
      'Host': 'merchant-api.ifood.com.br',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': '187'
    }
  });
  try {
    const {data} = await APIPOST.post('/authentication/v1.0/oauth/token', qs.stringify({
      grantType,
      clientId,
      clientSecret
    }))
    return res.json({data});
  } catch (error) {
    return res.json({error});
  }
}));

routerAuthentication.post('/token/distributed', rescue(async (req, res, _next) => {
  const { clientId } = req.body;
  const APIPOST = axios.create({
    baseURL: 'https://merchant-api.ifood.com.br',
    headers: {
      'Host': 'merchant-api.ifood.com.br',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': '45'
    }
  });
  try {
    const {data} = await APIPOST.post('/authentication/v1.0/oauth/userCode', qs.stringify({
      clientId
    }))
    return res.json({data});
  } catch (error) {
    return res.json({error});
  }
}));

module.exports = { routerAuthentication };
