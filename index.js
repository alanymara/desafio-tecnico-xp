const express = require('express');
const investimentosRouters = require('./src/routers/investimentos.router');
const contaRouters = require('./src/routers/conta.router');
const loginRouters = require('./src/routers/login.router');
const error = require('./src/middlewares/error');

const app = express();

app.use(express.json());

app.use('/', investimentosRouters);

app.use('/', contaRouters);

app.use('/', loginRouters);

app.use(error);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`escutando a porta ${port}`)
})
