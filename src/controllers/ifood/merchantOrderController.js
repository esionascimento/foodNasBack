const express = require('express');
const rescue = require('express-rescue');
const axios = require('axios');
const { APIPOST } = require('../../utils/APIPOST');
require('dotenv').config();

const routerMerchantOrder = express.Router();

// /events:polling
routerMerchantOrder.get('/event:polling', rescue(async (req, res, _next) => {
  const { authorization } = req.headers;
  const returnApi = APIPOST(authorization);

  try {
    const { status, data } = await returnApi.get(`/order/v1.0/events:polling`);
    return res.status(status).json({data});
  } catch (error) {
    return res.status(error.response.status).json(error);
  }
}));

// /events/acknowledgment
// Reconheça um conjunto de eventos, dispensando-os de futuras chamadas de sondagem.
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
    const data = await APIPOST.post(`/order/v1.0/events/acknowledgment`, req.body)
    return res.json({ data});
  } catch (error) {
    return res.json(error);
  }
}));

// /orders/{id}
// Obter detalhes de um determinado pedido a partir de seu id
routerMerchantOrder.get('/details', rescue(async (req, res) => {
  const { authorization, order } = req.headers
  const returnApi = APIPOST(authorization);

  try {
    const { data } = await returnApi.get(`/order/v1.0/orders/${order}`)
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
}));

// /orders/${orderId}/confirm
// Confirme um pedido. É obrigatório consultar os dados da encomenda antes de confirmar. Caso contrário, a solicitação será ignorada.
routerMerchantOrder.get('/actions/confirm', rescue(async (req, res) => {
  const { authorization, order } = req.headers

  const APIPOST = axios.create({
    baseURL: 'https://merchant-api.ifood.com.br',
    headers: {
      'Host': 'merchant-api.ifood.com.br',
      'Authorization': `${authorization}`
    }
  });
  try {
    const data = await APIPOST.post(`/order/v1.0/orders/${order}/confirm`)
    return res.json({ data});
  } catch (error) {
    return res.json(error);
  }
}));

// /orders/{id}/startPreparation
// Informar o início da preparação do pedido.

// /orders/{id}/readyToPickup
// Sinalizar que um pedido está pronto para ser entregue

// /orders/{id}/dispatch
// Despachar um pedido
routerMerchantOrder.get('/dispatch', rescue(async (req, res) => {
  const { authorization, order } = req.headers
  const returnApi = APIPOST(authorization);

  try {
    const { data } = await returnApi.post(`/order/v1.0/orders/${order}/dispatch`)
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
}));

// /orders/{id}/requestCancellation
// Solicitação de cancelamento de pedido
routerMerchantOrder.post('/:order_id/cancelled', rescue(async (req, res) => {
  const { order_id } = req.params;
  const { authorization } = req.headers
  const { cancellationCode, reason } = req.body
  const returnApi = APIPOST(authorization);

  try {
    const { data } = await returnApi.post(`/order/v1.0/orders/${order_id}/requestCancellation, ${ cancellationCode, reason }`)
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
}));

// /orders/{id}/acceptCancellation
// Aceitar uma solicitação de cancelamento do cliente para um pedido

// /orders/{id}/denyCancellation
// Negar uma solicitação de cancelamento do cliente para um pedido

// /orders/${orderId}
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
    return res.json({ data});
  } catch (error) {
    return res.json(error);
  }
}));

module.exports = { routerMerchantOrder };
