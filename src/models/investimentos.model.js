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
  const query = `SELECT CA.codCliente, CA.codAtivo, CA.qtdeAtivo, A.valorAtivo
  FROM Investimentos.clientesAtivos AS CA
  INNER JOIN Investimentos.ativos AS A ON CA.codAtivo = A.codAtivo WHERE CA.codCliente = ?;`;
  const [result] = await connection.execute(query, [cod]);
  return result;
}

const updateQtdeAtivo = async (codAtivo, qtdeAtivo) => {
  const query = 'UPDATE Investimentos.ativos SET qtdeAtivo = ? WHERE codAtivo = ?; ';
  const [result] = await connection.execute(query, [qtdeAtivo, codAtivo]);
  return result;
}

module.exports = {
  comprarAtivos,
  getAtivosByCod,
  getClientesByCod,
  updateQtdeAtivo,
}