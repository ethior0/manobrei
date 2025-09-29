import bcrypt from 'bcrypt';
import conexao from "./conexao.js";

export async function verificarUsuario(email, senha) {
  const query = `SELECT * FROM tbCliente WHERE email = ?`;
  const data = [email];

  const pool = conexao();

  try {
    const [results] = await pool.query(query, data);

    if(results.length > 0) {
      const usuario = results[0];
      return [usuario]; 
    } else {
      console.log("Usuário não encontrado");
      return []; 
    }
  } catch(err) {
  console.log('Erro!', err.message);
    return err.message;
  }
}