const Joi = require('joi');

const schema = Joi.object({
  CodCliente: Joi.number().min(1).required(),
  Valor: Joi.number().min(1).required(),
});

const depositoValidacao = (req, _res, next) => {
  const novoDeposito = req.body;
  const { error } = schema.validate(novoDeposito);

  if (error) {
    return next({ status: 400, message: error.message });
  }
  next();
}

module.exports = depositoValidacao;