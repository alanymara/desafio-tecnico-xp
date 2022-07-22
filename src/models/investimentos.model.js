const connection = require('./connection');

const comprarAtivos = async (codAtivo, qtdeAtivo, codCliente) => {
  const query = 'INSERT INTO Investimentos.clientesAtivos (codAtivo, qtdeAtivo, codCliente) VALUES (?, ?, ?);';
  const [resultado] = await connection.execute(query, [codAtivo, qtdeAtivo, codCliente]);
  return resultado;
}

const buscarAtivo = async (cod) => {
  const query = 'SELECT codAtivo AS CodAtivo, qtdeAtivo AS QtdeAtivo, valorAtivo AS Valor FROM Investimentos.ativos WHERE codAtivo = ?;';
  const [resultado] = await connection.execute(query, [cod]);
  return resultado;
}

const buscarCliente =  async (cod) => {
  const query = `SELECT CA.codCliente AS CodCliente, CA.codAtivo AS CodAtivo, CA.qtdeAtivo AS QtdeAtivo, A.valorAtivo AS Valor
  FROM Investimentos.clientesAtivos AS CA
  INNER JOIN Investimentos.ativos AS A ON CA.codAtivo = A.codAtivo WHERE CA.codCliente = ?;`;
  const [resultado] = await connection.execute(query, [cod]);
  return resultado;
}

const atualizarQtdeAtivo = async (codAtivo, qtdeAtivo) => {
  const query = 'UPDATE Investimentos.ativos SET qtdeAtivo = ? WHERE codAtivo = ?; ';
  const [resultado] = await connection.execute(query, [qtdeAtivo, codAtivo]);
  return resultado;
}

const checarCliente = async (cod) => {
  const query = `SELECT * FROM Investimentos.clientes WHERE codCliente = ?;`;
  const [resultado] = await connection.execute(query, [cod]);
  return resultado;
}

module.exports = {
  comprarAtivos,
  buscarAtivo,
  buscarCliente,
  atualizarQtdeAtivo,
  checarCliente,
}