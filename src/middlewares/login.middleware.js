const Joi = require('joi');

const schema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'O campo "email" é obrigatório',
    'string.base': 'O campo "email" deve ser no formato de string',
    'string.email': 'O campo "email" deve ter o formato de email',
  }),
  senha: Joi.string().min(6).required().messages({
    'any.required': 'O campo "senha" é obrigatório',
    'string.base': 'O campo "senha" deve ser no formato de string',
    'string.min': 'O campo "senha" deve ter no mínimo 6 caracteres',
  }),
});

const loginValidacaoCampos = (req, _res, next) => {
  const novoLogin = req.body;
  const { error } = schema.validate(novoLogin);
  if (error) {
    return next({ status: 400, message: error.message });
  } 
  next();
};

module.exports = {
  loginValidacaoCampos
};