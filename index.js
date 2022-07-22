const express = require('express');
const investimentosRouters = require('./src/routers/investimentos.router');
const contaRouters = require('./src/routers/conta.router');
const error = require('./src/middlewares/error');

const app = express();

app.use(express.json());

app.use('/', investimentosRouters);

app.use('/', contaRouters);

app.use(error);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`escutando a porta ${port}`)
})
