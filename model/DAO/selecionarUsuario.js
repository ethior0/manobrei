import conexao from "./conexao.js";

export async function selecionarUsuario() {
  try {
    const query = `SELECT * FROM tbCliente WHERE role = "user"`;
    const pool = conexao();
    const results = await pool.query(query);

    return results[0];
  } catch(err) {
    console.log("Erro ao selecionar todos usuários:", err.message);
    return err.message;
  }
}