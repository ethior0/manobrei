import { selecionarCategoria } from "../model/DAO/selecionarCategoria.js";

export const categoriasGet = async (req, res) => {
  const [user] = req.session.login;
  
  const categorias = await selecionarCategoria();
  console.log(categorias);

  res.render("dashboard/categorias", { user: user, auth: true, data: categorias});
}