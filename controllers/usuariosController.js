import { atualizarUsuario } from "../model/DAO/atualizarUsuario.js";
import { excluirUsuario } from "../model/DAO/excluirUsuario.js";
import { selecionarUsuario } from "../model/DAO/selecionarUsuario.js";

export const usuariosGet = async (req, res) => {
	const [user] = req.session.login;

	const usuarios = await selecionarUsuario();

	res.render("dashboard/usuarios", { user: user, auth: true, data: usuarios });
}

export const usuariosPatch =  async (req, res) => {
	const { id } = req.params;
	const { nome, email } = req.body;

	const response = await atualizarUsuario(id, nome, email);

	if (response) {
		res.json({ message: "Usuário atualizado com sucesso" });
	} else {
		res.json({ message: "Erro ao atualizar" });
	}
}

export const usuariosDelete = async (req, res) => {
	const { id } = req.params;

	const response = await excluirUsuario(id);

	if (response) {
		res.json({ message: "Usuário deletado com sucesso" });
	} else {
		res.json({ message: "Erro ao deletar" });
	}
}