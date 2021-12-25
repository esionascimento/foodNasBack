const express = require('express');
const rescue = require('express-rescue');
const axios = require('axios')
require('dotenv').config();

const routerMerchant = express.Router();

routerMerchant.get('/status', rescue(async (req, res, _next) => {
  const { authorization } = req.headers
  const merchantId = process.env.MERCHANT_ID
  const APIPOST = axios.create({
    baseURL: 'https://merchant-api.ifood.com.br',
    headers: {
      'Host': 'merchant-api.ifood.com.br',
      'Authorization': `${authorization}`
    }
  });
  try {
    const { data } = await APIPOST.get(`/merchant/v1.0/merchants/${merchantId}/status`)
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
}));

module.exports = { routerMerchant };
