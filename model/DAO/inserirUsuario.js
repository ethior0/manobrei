import conexao from "./conexao.js";

export async function inserirUsuario(nome, email, senha) {
  const query = `CALL spInserir_Usuario(?, ?, ?, NULL, NULL)`;
  const data = [nome, email, senha];

  const conn = conexao();

  try {
    const [ results ] = await conn.query(query, data);
    await conn.end();

    return true;
  } catch(err) {
    console.error(err);
    return false;
  }
}