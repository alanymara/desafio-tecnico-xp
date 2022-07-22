const connection = require('./connection');

const comprarAtivos = async (codAtivo, qtdeAtivo, codCliente) => {
  const query = 'INSERT INTO Investimentos.clientesAtivos (codAtivo, qtdeAtivo, codCliente) VALUES (?, ?, ?);';
  const [result] = await connection.execute(query, [codAtivo, qtdeAtivo, codCliente]);
  return result;
}

const getAtivosByCod = async (cod) => {
  const query = 'SELECT * FROM Investimentos.ativos WHERE codAtivo = ?;';
  const [result] = await connection.execute(query, [cod]);
  return result;
}

const getClientesByCod =  async (cod) => {
  const query = 'SELECT * FROM Investimentos.clientes WHERE codCliente = ?;';
  const [result] = await connection.execute(query, [cod]);
  return result;
}

module.exports = {
  comprarAtivos,
  getAtivosByCod,
  getClientesByCod,
}