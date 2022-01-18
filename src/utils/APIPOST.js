const axios = require('axios');

const APIPOST = (authorization) => 
  axios.create({
    baseURL: 'https://merchant-api.ifood.com.br',
    headers: {
      'Host': 'merchant-api.ifood.com.br',
      'Authorization': `${authorization}`
    }
  });

module.exports = { APIPOST };
