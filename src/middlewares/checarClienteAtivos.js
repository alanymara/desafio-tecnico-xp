const { buscarCliente } = require('../controllers/investimentos.controller');
const { buscarAtivo } = require('../models/investimentos.model');

const checarClienteOuAtivo = (cod) => {
  if (cod >= 1000) {
    return buscarCliente;
  }
  return buscarAtivo;
}

module.exports = checarClienteOuAtivo;
