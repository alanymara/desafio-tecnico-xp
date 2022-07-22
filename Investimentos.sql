DROP DATABASE IF EXISTS Investimentos;

CREATE DATABASE Investimentos;

USE Investimentos;

CREATE TABLE clientes (
    codCliente INT NOT NULL auto_increment,
    saldo DECIMAL NOT NULL,
    PRIMARY KEY(codCliente)
) ENGINE=INNODB;

CREATE TABLE ativos (
    codAtivo INT NOT NULL auto_increment,
    qtdeAtivo INT NOT NULL,
    valorAtivo DECIMAL NOT NULL,
    PRIMARY KEY(codAtivo)
) ENGINE=INNODB;

CREATE TABLE clientesAtivos (
    codCliente INT NOT NULL,
    codAtivo INT NOT NULL,
	qtdeAtivo INT NOT NULL
)  ENGINE=INNODB;

INSERT INTO Investimentos.clientes (codCliente, saldo) VALUES
    (1, 10),
    (2, 10),
    (3, 10);

INSERT INTO Investimentos.ativos (codAtivo, qtdeAtivo, valorAtivo) VALUES
	(1000, 15, 56),
	(1002, 16, 85),
    (1003, 17, 96);

