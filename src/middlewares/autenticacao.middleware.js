const { autenticacaoToken } = require('../utils/JWTToken');

const autenticacaoMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  const payload = await autenticacaoToken(token);

  res.locals.payload = payload;

  next();
};

module.exports = autenticacaoMiddleware;