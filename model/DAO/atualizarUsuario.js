import conexao from "./conexao.js";

export async function atualizarUsuario(id, nome, email) {
  try {
    const query = `UPDATE tbCliente SET nome = ?, email = ? WHERE id_Cliente = ?`;
    const data = [nome, email, id];

    const pool = conexao();
    const [results] = await pool.query(query, data);

    console.log("Usuário atualizado com sucesso!");
    return true;
  } catch(err) {
    console.log("Erro ao atualizar usuário:", err)
    return false;
  }
}