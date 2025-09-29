CREATE DATABASE db_manobrei
USE db_manobrei

CREATE TABLE tbCliente (
    id_Cliente INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user'
);

CREATE TABLE tbAdmin (
    id_Admin INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    nome VARCHAR(100) NOT NULL
);


CREATE TABLE Produto (
    id_Prod INT AUTO_INCREMENT PRIMARY KEY,
    nomeP VARCHAR(150) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    tamanho VARCHAR(50),  
    dataCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ProdutoImagem (
    id_Imagem INT AUTO_INCREMENT PRIMARY KEY,
    produto_id INT NOT NULL,
    url_imagem VARCHAR(255) NOT NULL, 
    principal BOOLEAN DEFAULT FALSE,  
    ordem INT DEFAULT 0,              
    FOREIGN KEY (produto_id) REFERENCES Produto(id_Prod) ON DELETE CASCADE
);

SELECT * FROM tbCliente
/* DROP TABLE tb_cliente */
