const Joi = require('joi');

const schema = Joi.object({
  CodCliente: Joi.number().min(1).required(),
  Saldo: Joi.number().min(1).required(),
});

const depositoValidate = (req, _res, next) => {
  const novoDeposito = req.body;
  const { error } = schema.validate(novoDeposito);

  if (error) {
    return next({ status: 400, message: error.message });
  }
  next();
}

module.exports = depositoValidate;