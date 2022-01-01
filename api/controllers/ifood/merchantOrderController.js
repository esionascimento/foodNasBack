const express = require('express');
const rescue = require('express-rescue');
const axios = require('axios')
require('dotenv').config();

const routerMerchantOrder = express.Router();

routerMerchantOrder.get('/event:polling', rescue(async (req, res, _next) => {
  const { authorization } = req.headers
  const APIPOST = axios.create({
    baseURL: 'https://merchant-api.ifood.com.br',
    headers: {
      'Host': 'merchant-api.ifood.com.br',
      'Authorization': `${authorization}`
    }
  });
  try {
    const { status, data } = await APIPOST.get(`/order/v1.0/events:polling`)
    console.log('status :', status);
    console.log('data :', data);
    return res.json({ status, data});
  } catch (error) {
    return res.json(error);
  }
}));

routerMerchantOrder.post('/event/acknowledgment', rescue(async (req, res) => {
  const { authorization } = req.headers
  const APIPOST = axios.create({
    baseURL: 'https://merchant-api.ifood.com.br',
    headers: {
      'Host': 'merchant-api.ifood.com.br',
      'Authorization': `${authorization}`
    }
  });
  try {
    const data = await APIPOST.post(`/order/v1.0/events/acknowledgment`)
    console.log('data :', data);
    return res.json({ data});
  } catch (error) {
    return res.json(error);
  }
}));

routerMerchantOrder.get('/details/order-details', rescue(async (req, res) => {
  const { authorization, orderId } = req.headers
  const APIPOST = axios.create({
    baseURL: 'https://merchant-api.ifood.com.br',
    headers: {
      'Host': 'merchant-api.ifood.com.br',
      'Authorization': `${authorization}`
    }
  });
  try {
    const data = await APIPOST.get(`/order/v1.0/orders/${orderId}`);
    console.log('data :', data);
    return res.json({ data});
  } catch (error) {
    return res.json(error);
  }
}));

routerMerchantOrder.post('/actions/confirm', rescue(async (req, res) => {
  const { authorization, orderId } = req.headers
  const APIPOST = axios.create({
    baseURL: 'https://merchant-api.ifood.com.br',
    headers: {
      'Host': 'merchant-api.ifood.com.br',
      'Authorization': `${authorization}`
    }
  });
  try {
    const data = await APIPOST.post(`/order/v1.0/orders/${orderId}/confirm`)
    console.log('data :', data);
    return res.json({ data});
  } catch (error) {
    return res.json(error);
  }
}));

module.exports = { routerMerchantOrder };
