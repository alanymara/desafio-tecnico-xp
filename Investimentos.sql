DROP DATABASE IF EXISTS Investimentos;

CREATE DATABASE Investimentos;

USE Investimentos;

CREATE TABLE clientes (
    codCliente INT NOT NULL auto_increment,
    saldo DOUBLE NOT NULL,
    PRIMARY KEY(codCliente)
) ENGINE=INNODB;

ALTER TABLE Investimentos.clientes auto_increment = 1;

CREATE TABLE ativos (
    codAtivo INT NOT NULL auto_increment,
    qtdeAtivo INT NOT NULL,
    valorAtivo DOUBLE NOT NULL,
    PRIMARY KEY(codAtivo)
) ENGINE=INNODB;

ALTER TABLE Investimentos.ativos auto_increment = 1000;

CREATE TABLE clientesAtivos (
    codCliente INT NOT NULL,
    codAtivo INT NOT NULL,
	qtdeAtivo INT NOT NULL
)  ENGINE=INNODB;

CREATE TABLE conta (
	id INT NOT NULL auto_increment,
    operacao VARCHAR(10) NOT NULL,
    codCliente INT NOT NULL,
    valor DOUBLE NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

INSERT INTO Investimentos.clientes (saldo) VALUES
    (100.96),
    (150.02),
    (108.78);

INSERT INTO Investimentos.ativos (qtdeAtivo, valorAtivo) VALUES
	(15, 56.01),
    (15, 56.99),
	(16, 85.89),
    (17, 96.65);
INSERT INTO Investimentos.clientesAtivos (codCliente, codAtivo, qtdeAtivo) VALUES
	(1, 1000, 5),
    (1, 1001, 9),
	(2, 1003, 8),
    (2, 1002, 10)
