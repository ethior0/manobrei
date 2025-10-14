import { selecionarCategoria } from "../model/DAO/selecionarCategoria.js";

export const categoriasGet = async (req, res) => {
  const [user] = req.session.login;
  
  const categorias = await selecionarCategoria();
  console.log(categorias);

  res.render("dashboard", { user: user, auth: true, categorys: categorias});
}