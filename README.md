# Boas vindas ao repositório do projeto Investimentos!

## Contexto

Este projeto trata-se de uma aplicação de investimentos em ações que possui algumas das funcionalidades de conta digital mais utilizadas no dia a dia. Foi desenvolvido com a finalidade de participar do desafio prático da XP.

---

## 🔧 Técnologias usadas

*Back-end:*

> Desenvolvido usando: NodeJS, ExpressJS, MYSQL, ES6, JavaScript, Joi, JWT, Heroku, ClearDB MySQL
> 

Escolhi utilizar a linguagem JavaScript e todas as tecnologias listadas acima devido ter maior familiaridade e confiança na implementação. Além disso, utilizei o módulo de validação de dados Joi para tornar mais eficiente a verificação dos campos nas requisições. O JWT para gerar e verificar o token de validação do login. ClearDB MySQL para criar o banco de dados online. Por fim, o Heroku para hospedar o banco de dados e para deploy da aplicação para ser acessada externamente.

---

## ☁️ Usando banco de dados externo (deploy)

- ***Para acessar as rotas da API, acesse uma ferramenta cliente de API REST para fazer uso das rotas da aplicação. Recomendado: Insomnia ou Postman.***

⚠️  As rotas da aplicação se encontrão descritas no tópico **Lista de Ações** com a relação completa de ações da API que podem ser realizadas.


## 🖥️ Usando banco de dados localmente

### **Instalando Dependências**

- Para instalar o back-end, siga os passos:

- ***Clone o repositório:***

```jsx
git clone git@github.com:alanymara/desafio-tecnico-xp.git
```

- ***Entre na pasta do repositório que você acabou de clonar:***

```jsx
cd desafio-tecnico-xp
```

### Executando aplicação

- Para rodar o back-end, abra o terminal e siga os passos:
    - ***Instale as dependências:***
    
    ```jsx
    npm install
    ```
    
    - ***Rode a aplicação:***
    
    ```jsx
    npm run dev
    ```
    
    ⚠️ A aplicação irá rodar automaticamente na porta 3005 por padrão.
    
    Após isso, irá aparecer uma mensagem no console conforme seguinte: 
    
    ```jsx
    `escutando a porta 3005`
    ```
    
    ⚠️ Para seguir, é necessário ter instalado alguma ferramenta visual de design de banco de dados. Recomendado: MySQL Workbench.
    
    - ***Copie o código do arquivo `Investimentos.sql` (que está na raiz do projeto) e cole em uma nova aba em seu Workbench  para criar o banco de dados. Código abaixo:***
        
        ```sql
        CREATE DATABASE Investimentos;
        
        USE Investimentos;
        
        CREATE TABLE clientes (
            codCliente INT NOT NULL auto_increment,
            saldo DOUBLE NOT NULL,
            PRIMARY KEY(codCliente)
        ) ENGINE=INNODB;
        
        ALTER TABLEclientes auto_increment = 1;
        
        CREATE TABLE ativos (
            codAtivo INT NOT NULL auto_increment,
            qtdeAtivo INT NOT NULL,
            valorAtivo DOUBLE NOT NULL,
            PRIMARY KEY(codAtivo)
        ) ENGINE=INNODB;
        
        ALTER TABLE ativos auto_increment = 100;
        
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
        
        INSERT INTO clientes (saldo) VALUES
          (1000.50),
          (150.50),
          (108.50);
        
        INSERT INTO ativos (qtdeAtivo, valorAtivo) VALUES
        	(15, 56.01),
          (15, 56.99),
        	(16, 85.89),
          (17, 96.65);
        INSERT INTO clientesAtivos (codCliente, codAtivo, qtdeAtivo) VALUES
        	(1, 100, 5),
          (1, 101, 9),
        	(2, 103, 8),
          (2, 102, 10)
        ```
        
    
    - ***Acesse o arquivo na raiz do projeto com o nome `.env.example` adicione nele as informações para conexão do Banco de Dados e renomeio para `.env`:***
    
    ```
    MYSQL_HOST=localhost
    MYSQL_DB_NAME=Investimentos
    MYSQL_USER=seuusername
    MYSQL_PASSWORD=seupassword
    PORT=3005
    ```
    
    - ***Acessar uma ferramenta cliente de API REST para fazer uso das rotas da aplicação. Recomendado: Insomnia ou Postman.***
    
    ⚠️ As rotas da aplicação se encontrão descritas no tópico **Lista de Ações** com a relação completa de ações da API que podem ser realizadas.
    

---

## Lista de Ações

### 📈 Requisições para investimento

- **Realizar compra de um ativo**
    - O endpoint deve ser acessível com o método POST através das URL’s: <br />
    externo: `https://investimentos-xp.herokuapp.com/investimentos/comprar` <br />
    localmente: `localhost/3005/investimentos/comprar` <br />
    - O corpo da requisição deverá seguir o formato abaixo:
        
        ```jsx
        {
          "codAtivo": integer,
          "qtdeAtivo": integer,
          "codCliente": integer
        }
        ```
        
    
    > ***Descrição dos campos**
    “codCliente” - código do cliente<br />
    “codAtivo” - código de identificação única do ativo<br />
    “qtdeAtivo” - quantidade de ações a serem compradas*
    > 
- **Buscar um cliente específico e a relação de ativos que ele possui**
    - O endpoint deve ser acessível com o método GET através das URL’s:<br />
    externo: `https://investimentos-xp.herokuapp.com/ativos/{cod-cliente}`<br />
    localmente:  `localhost/3005/ativos/{cod-cliente}`<br />
    - O codigo do cliente deve ser informado substituindo o {cod-cliente}:
        
        Exemplo de retorno:
        
        ```jsx
        [
          {
            "CodCliente": 2,
            "CodAtivo": 100,
            "QtdeAtivo": 1,
            "Valor": 56.99
          },
          {
            "CodCliente": 2,
            "CodAtivo": 102,
            "QtdeAtivo": 1,
            "Valor": 85.89
          }
        ]
        ```
        
    
    > ***Descrição dos campos**
    “CodCliente” - código do cliente<br />
    “CodAtivo” - código de identificação única do ativo<br />
    “QtdeAtivo” - quantidade de ações a serem compradas<br />
    ”Valor” - valor unitário do ativo*
    > 
    
- **Buscar um ativo específico e suas informações**
    - O endpoint deve ser acessível com o método GET através das URL’s:<br />
    externo: `https://investimentos-xp.herokuapp.com/ativos/{cod-ativo}`<br />
    localmente: `localhost/3005/ativos/{cod-ativo}`
    - O codigo do ativo deve ser informado substituindo o {cod-ativo}:
        
        Exemplo de retorno:
        
        ```jsx
        [
          {
            "CodAtivo": 100,
            "QtdeAtivo": 150,
            "Valor": 56.99
          }
        ]
        ```
        
    
    > ***Descrição dos campos**
    “CodAtivo” - código de identificação única do ativo <br />
    “QtdeAtivo” - quantidade de ações disponíveis para venda <br />
    ”Valor” - valor unitário do ativo*
    > 
- **Buscar todos os ativos e a quantidade vendida de cada um**
    - O endpoint deve ser acessível com o método GET através das URL’s: <br />
    externo: `https://investimentos-xp.herokuapp.com/ativos`<br />
    localmente: `localhost/3005/ativos`
        
        Exemplo de retorno:
        
        ```jsx
        [
          {
            "codAtivo": 100,
            "qtdeAtivo": "5"
          },
          {
            "codAtivo": 101,
            "qtdeAtivo": "9"
          },
          {
            "codAtivo": 102,
            "qtdeAtivo": "10"
          }
        ]
        ```
        
    
    > ***Descrição dos campos**
    “codAtivo” - código de identificação única do ativo <br />
    “qtdeAtivo” - quantidade de ações vendidas daquele ativo*
    > 

### 🪙 Requisições depósitos e saques

- **Realizar depósito na conta de um cliente**
    - O endpoint deve ser acessível com o método POST através das URL’s: <br />
    externo: `https://investimentos-xp.herokuapp.com/conta/deposito`<br />
    localmente: `localhost/3005/conta/deposito`
    - O corpo da requisição deverá seguir o formato abaixo:
        
        ```jsx
        {
          "CodCliente": integer
          "Valor": decimal,
        }
        ```
        
    
    > ***Descrição dos campos**
    “CodCliente” - código do cliente <br />
    “Valor” - Valor a ser depositado na conta*
    > 
- **Realizar saque da conta de um cliente**
    - O endpoint deve ser acessível com o método POST através das URL’s: <br />
    externo: `https://investimentos-xp.herokuapp.com/conta/saque` <br />
    localmente: `localhost/3005/conta/saque`
    - O corpo da requisição deverá seguir o formato abaixo:
        
        ```jsx
        {
          "CodCliente": integer
          "Valor": decimal,
        }
        ```
        
    
    > ***Descrição dos campos**
    “CodCliente” - código do cliente <br />
    “Valor” - Valor a ser sacado da conta*
    > 
- **Buscar informações da conta de um cliente específico**
    - O endpoint deve ser acessível com o método GET através das URL’s: <br />
    externo: `https://investimentos-xp.herokuapp.com/conta/{cod-cliente}`<br />
    localmente: `localhost/3005/conta/{cod-cliente}`
    - O codigo do cliente deve ser informado substituindo o {cod-cliente}:
    - Exemplo de retorno
    
    ```jsx
    [
      {
       "CodCliente": 1
       "Saldo": 998.25,
      }
    ]
    ```
    
    > ***Descrição dos campos**
    “CodCliente” - código do cliente <br />
    “Saldo” - saldo na conta do cliente*
    > 

---

## Contato

[***Linkedin***](https://www.linkedin.com/in/alanyfernandes/)

*Desenvolvido por: Alany Fernandes*
