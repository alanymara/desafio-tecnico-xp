const connection = require('./connection');

const comprarAtivos = async (codAtivo, qtdeAtivo, codCliente) => {
  const query = 'INSERT INTO Investimentos.clientesAtivos (codAtivo, qtdeAtivo, codCliente) VALUES (?, ?, ?);';
  const [result] = await connection.execute(query, [codAtivo, qtdeAtivo, codCliente]);
  return result;
}
module.exports = {
  comprarAtivos,
}