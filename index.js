const express = require('express');
const investimentosRouters = require('./src/routers/investimentos.routers');

const app = express();

app.use(express.json());

/* app.use('/', investimentosRouters) */

app.get('/teste', () => {
  console.log('deu certo');
})

const port = 3002;

app.listen(port, () => {
  console.log(`escutando a porta ${port}`)
})
