import { selecionarUsuario } from "../model/DAO/selecionarUsuario.js";

export const usuariosGet = async (req, res) => {
	const [user] = req.session.login;

	const usuarios = await selecionarUsuario();
	console.log(usuarios);

	res.render("dashboard", { user: user, auth: true, clients: usuarios });
}