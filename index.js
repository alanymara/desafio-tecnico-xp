const express = require('express');
const investimentosRouters = require('./src/routers/investimentos.router');

const app = express();

app.use(express.json());

app.use('/', investimentosRouters)

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`escutando a porta ${port}`)
})
