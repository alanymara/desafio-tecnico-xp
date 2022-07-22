const Joi = require('joi');

const schema = Joi.object({
  codAtivo: Joi.number().min(1).required(),
  qtdeAtivo: Joi.number().min(1).required(),
  codCliente: Joi.number().min(1).required(),
});

const comprasValidate = (req, _res, next) => {
  const newCompra = req.body;
  const { error } = schema.validate(newCompra);

  if (error) {
    return next({ status: 400, message: error.message });
  }
  next();
}

module.exports = comprasValidate;