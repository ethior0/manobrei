CREATE DATABASE db_manobrei
USE db_manobrei

CREATE TABLE tbCliente (
    id_Cliente INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user'
);

CREATE TABLE tbCategorias (
  id_Categoria INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL
);

CREATE TABLE tbProduto (
    id_Prod INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    descricao TEXT NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    estoque INT DEFAULT 0 NOT NULL,
    tamanho VARCHAR(50) NOT NULL,  
    dataCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_categoria INT,
	FOREIGN KEY (id_categoria) REFERENCES tbCategorias(id_categoria)
);

CREATE TABLE ProdutoImagem (
    id_Imagem INT AUTO_INCREMENT PRIMARY KEY,
    produto_id INT NOT NULL,
    url_imagem VARCHAR(255) NOT NULL, 
    principal BOOLEAN DEFAULT FALSE,  
    ordem INT DEFAULT 0,              
    FOREIGN KEY (produto_id) REFERENCES Produto(id_Prod) ON DELETE CASCADE
);

SELECT * FROM tbCliente;
SELECT * FROM tbCategorias;
SELECT * FROM tbProduto;

SELECT * FROM tbCliente WHERE role = "user"
/* DELETE FROM tbCliente WHERE email = "thigasmoreira@gmail.com" */
/* DROP TABLE tb_cliente */
