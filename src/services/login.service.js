const { geradorJWTToken } = require("../utils/JWTToken");

const autenticacao = async ({ email, senha }) => {
  if (!email || !senha) {
    const erro = { status: 400, message: 'Alguns campos estão faltando' };
    throw erro;
  }

  const usuario = await loginModel.buscarLogin(email, senha);

   if (!usuario) {
    const erro = { status: 400, message: 'Campos inválidos' };
    throw erro;
   }

const token = geradorJWTToken(usuario.dataValues);
return { token };
};

module.exports = {
  autenticacao,
};