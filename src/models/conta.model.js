const connection = require('./connection');

const depositoConta = async (operacao, codCliente, valor) => {
  const query = `INSERT INTO Investimentos.conta (operacao, codCliente, valor) VALUES
  (?, ?, ?);`;
  const resultado = await connection.execute(query, [operacao, codCliente, valor]);
  return resultado;
};

module.exports = {
  depositoConta,
};