import conexao from "./conexao.js";

export async function excluirUsuario(id) {
  try {
    const query = `DELETE FROM tbCliente WHERE id_Cliente = ?`;
    const data = [id];

    const pool = conexao();
    const [results] = await pool.query(query, data);

    console.log(results);

    console.log("Usuário excluído com sucesso!");
    return true;
  } catch(err) {
    console.error("Erro ao excluir usuário:", err);
    return false;
  }
}