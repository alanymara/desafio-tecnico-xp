const connection = require('./connection');

const buscarLogin = async (email, senha) => {
  const query = `SELECT * FROM usuarios WHERE email = ? && senha = ?;`;
  const resultado = await connection.execute(query, [email, senha]);
  return resultado;
};

module.exports = {
  buscarLogin,
}