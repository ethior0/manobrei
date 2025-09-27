import conexao from "./conexao.js";

export async function verificarUsuario(email, senha) {
  const query = `SELECT * FROM tb_cliente WHERE email = ?`;
  const data = [email];

  const conn = conexao();

  try {
    const [results] = await conn.query(query, data);

    if(results.length > 0) {
      const usuario = results[0];
      
      return [usuario];
    } else {
      console.log("Usuário não existe");
      return [];
    }
  } catch(err) {
    console.error(err);
  }
}