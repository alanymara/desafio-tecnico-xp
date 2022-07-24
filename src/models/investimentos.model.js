const connection = require('./connection');

const comprarAtivos = async (codAtivo, qtdeAtivo, codCliente) => {
  const query = 'INSERT INTO clientesAtivos (codAtivo, qtdeAtivo, codCliente) VALUES (?, ?, ?);';
  const [resultado] = await connection.execute(query, [codAtivo, qtdeAtivo, codCliente]);
  return resultado;
};

const comprarDoMesmoAtivo = async (qtdeAtivo, codAtivo) => {
  const query = 'UPDATE clientesAtivos SET qtdeAtivo = ? WHERE codAtivo = ?;';
  const [resultado] = await connection.execute(query, [qtdeAtivo, codAtivo]);
  return resultado;
};

const buscarAtivo = async (cod) => {
  const query = 'SELECT codAtivo AS CodAtivo, qtdeAtivo AS QtdeAtivo, valorAtivo AS Valor FROM ativos WHERE codAtivo = ?;';
  const [resultado] = await connection.execute(query, [cod]);
  return resultado;
};

const buscarCliente =  async (cod) => {
  const query = `SELECT CA.codCliente AS CodCliente, CA.codAtivo AS CodAtivo, CA.qtdeAtivo AS QtdeAtivo, A.valorAtivo AS Valor
  FROM clientesAtivos AS CA
  INNER JOIN ativos AS A ON CA.codAtivo = A.codAtivo WHERE CA.codCliente = ?;`;
  const [resultado] = await connection.execute(query, [cod]);
  return resultado;
};

const atualizarQtdeAtivo = async (codAtivo, qtdeAtivo) => {
  const query = 'UPDATE ativos SET qtdeAtivo = ? WHERE codAtivo = ?; ';
  const [resultado] = await connection.execute(query, [qtdeAtivo, codAtivo]);
  return resultado;
};

const atualizarSaldo = async (codCliente, saldoAtualizado) => {
  const query = 'UPDATE clientes SET saldo = ? WHERE codCliente = ?;';
  const [resultado] = await connection.execute(query, [saldoAtualizado, codCliente]);
  return resultado;
};

const buscarTodosAtivos = async () => {
  const query = `SELECT codAtivo, SUM(qtdeAtivo) AS qtdeAtivo FROM clientesAtivos GROUP BY codAtivo ORDER BY codAtivo ASC;`;
  const [resultado] = await connection.execute(query);
  return resultado; 
};

module.exports = {
  comprarAtivos,
  buscarAtivo,
  buscarCliente,
  atualizarQtdeAtivo,
  atualizarSaldo,
  comprarDoMesmoAtivo,
  buscarTodosAtivos,
};