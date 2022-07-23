const Joi = require('joi');

const schema = Joi.object({
  codAtivo: Joi.number().min(100).required().messages({
    'any.required': 'O campo "codAtivo" é obrigatório',
    'number.base': 'O campo "codAtivo" deve ser um número',
    'number.integer': 'O "codAtivo" deve ser um número inteiro',
    'number.min': 'O "codAtivo" deve ser um número a partir de 1000',
  }),
  qtdeAtivo: Joi.number().integer().min(1).required().messages({
    'any.required': 'O campo "qtdeAtivo" é obrigatório',
    'number.base': 'O campo "qtdeAtivo" deve ser um número',
    'number.integer': 'O "qtdeAtivo" deve ser um número inteiro',
    'number.min': 'O "qtdeAtivo" deve ser um número a partir de 1',
  }),
  codCliente: Joi.number().integer().min(1).required().messages({
    'any.required': 'O campo "CodCliente" é obrigatório',
    'number.base': 'O campo "CodCliente" deve ser um número',
    'number.integer': 'O "CodCliente" deve ser um número inteiro',
    'number.min': 'O "CodCliente" deve ser um número a partir de 1',
  }),
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