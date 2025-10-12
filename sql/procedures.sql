DELIMITER //
CREATE PROCEDURE sp_InserirCliente (
	IN c_nome VARCHAR(100),
    IN c_email VARCHAR(100),
    IN c_senha VARCHAR(255),
    in c_role ENUM('user', 'admin')
)
BEGIN
	INSERT INTO tbCliente (nome, email, senha, role) VALUES
    (c_nome, c_email, c_senha, c_role);
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_InserirCategoria (
	IN c_nome VARCHAR(100)
)
BEGIN
	INSERT INTO tbCategorias (nome) VALUES
    (c_nome);
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_InserirProduto (
    IN p_nome VARCHAR(150),
    IN p_descricao TEXT,
    IN p_preco DECIMAL(10,2),
    IN p_tamanho VARCHAR(50)
)
BEGIN
    INSERT INTO tbProduto (nome, descricao, preco, tamanho)
    VALUES (p_nome, p_descricao, p_preco, p_tamanho);
END //
DELIMITER ;



DELIMITER //
CREATE PROCEDURE sp_InserirProdutoImagem (
    IN p_produto_id INT,
    IN p_url_imagem VARCHAR(255),
    IN p_principal BOOLEAN,
    IN p_ordem INT
)
BEGIN
    INSERT INTO ProdutoImagem (produto_id, url_imagem, principal, ordem) 
    VALUES (p_produto_id, p_url_imagem, p_principal, p_ordem);
END //
DELIMITER ; 

