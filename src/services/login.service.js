const { geradorJWTToken } = require('../utils/JWTToken');
const loginModel = require('../models/login.model');

const autenticacao = async ({ email, senha }) => {
  if (!email || !senha) {
    const erro = { status: 400, message: 'Alguns campos estão faltando' };
    throw erro;
  }

  const [usuario] = await loginModel.buscarLogin(email, senha);
   if (usuario.length === 0) {
    const erro = { status: 400, message: 'Campos inválidos' };
    throw erro;
   }
  const codCliente = usuario[0].codCliente;
  const token = geradorJWTToken({ email, codCliente });
  return { token };
};

module.exports = {
  autenticacao,
};