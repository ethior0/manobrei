import conexao from "./conexao.js";
import bcrypt from "bcrypt";

export async function inserirUsuario(nome, email, senha) {
  try {
    const saltRounds = 12;
    const senhaHash = await bcrypt.hash(senha, saltRounds);

    const query = `CALL sp_InserirCliente(?, ?, ?, "user")`;
    const data = [nome, email, senhaHash];


    const pool = conexao();
    const [results] = await pool.query(query, data);

    console.log("Usuário inserido com sucesso!");
    return true;

  } catch (err) {
    console.error("Erro ao inserir usuário:", err);
    return false;
  }
}
