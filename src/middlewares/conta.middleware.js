const Joi = require('joi');

const schema = Joi.object({
  CodCliente: Joi.number().min(1).required(),
  Valor: Joi.number().min(1).required(),
});

const operacaoValidacao = (req, _res, next) => {
  const novaOperacao = req.body;
  const { error } = schema.validate(novaOperacao);

  if (error) {
    return next({ status: 400, message: error.message });
  }
  next();
}

module.exports = operacaoValidacao;