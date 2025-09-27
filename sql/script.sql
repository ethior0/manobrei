CREATE DATABASE db_manobrei
USE db_manobrei

CREATE TABLE tb_cliente (
	idCliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    telefone VARCHAR(11) NULL,
    dataNasc DATE NULL
)

CREATE TABLE tb_admin (
    idAdmin INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    dataCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tb_produto (
    id_Prod INT AUTO_INCREMENT PRIMARY KEY,
    nomeP VARCHAR(150) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    tamanho VARCHAR(50),  
    dataCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tb_produtoImagem (
    id_Imagem INT AUTO_INCREMENT PRIMARY KEY,
    produto_id INT NOT NULL,
    url_imagem VARCHAR(255) NOT NULL, 
    principal BOOLEAN DEFAULT FALSE,  
    ordem INT DEFAULT 0,              
    FOREIGN KEY (produto_id) REFERENCES Produto(id_Prod) ON DELETE CASCADE
);


SELECT * FROM tb_cliente
/* DROP TABLE tb_cliente */
