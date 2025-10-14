import conexao from "./conexao.js";

export async function selecionarCategoria() {
	try {
		const query = `SELECT * FROM tbCategorias`;
		const pool = conexao();
		const results = await pool.query(query);

		 return results[0];
	} catch(err) {
		console.log("Erro ao selecionar todas categorias:", err.message);
    return err.message;
	}
}