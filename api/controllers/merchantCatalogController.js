const express = require('express');
const rescue = require('express-rescue');
const axios = require('axios')
require('dotenv').config();

const routerMerchantCatalog = express.Router();

routerMerchantCatalog.get('/list_products', rescue(async (req, res, _next) => {
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
    const { data } = await APIPOST.get(`/catalog/v1.0/merchants/${merchantId}/products?page=1&limit=10`)
    return res.json({data});
  } catch (error) {
    return res.json({error});
  }
}));

module.exports = { routerMerchantCatalog };
