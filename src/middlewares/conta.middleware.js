const Joi = require('joi');

const schema = Joi.object({
  CodCliente: Joi.number().integer().min(1).required().messages({
    'any.required': 'O campo "CodCliente" é obrigatório',
    'number.base': 'O campo "CodCliente" deve ser um número',
    'number.integer': 'O "CodCliente" deve ser um número inteiro',
    'number.min': 'O "CodCliente" deve ser um número a partir de 1',
  }),
  Valor: Joi.number().min(1).required().messages({
    'any.required': 'O campo "Valor" é obrigatório',
    'number.base': 'O campo "Valor" deve ser um número',
    'number.min': 'O "Valor" deve ser um número a partir de 1.00',
  })
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