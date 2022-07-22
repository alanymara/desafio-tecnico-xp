const Joi = require('joi');

const schema = Joi.object({
  codAtivo: Joi.number().min(1).required(),
  qtdeAtivo: Joi.number().min(1).required(),
  codCliente: Joi.number().min(1).required(),
});

const comprasValidacao = (req, _res, next) => {
  const novaCompra = req.body;
  const { error } = schema.validate(novaCompra);

  if (error) {
    return next({ status: 400, message: error.message });
  }
  next();
}

module.exports = comprasValidacao;