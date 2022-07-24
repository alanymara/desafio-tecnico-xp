const jwt = require('jsonwebtoken');

const { JWT_SECRET }= process.env;

const jwtconfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const geradorJWTToken = (payload) => jwt.sign(payload, JWT_SECRET, jwtconfig);

const autenticacaoToken = async (token) => {
  if (!token) {
    const erro = { status: 401, message: 'Token não encontrado' };
    throw erro;
  };
  try {
    const verificado = await jwt.verify(token, JWT_SECRET, jwtconfig);
    return verificado;
  } catch (error) {
    const erro = { status: 401, message: 'Token inspirado ou inválido' };
    throw erro;
  }
};

module.exports = {
  geradorJWTToken,
  autenticacaoToken,
}