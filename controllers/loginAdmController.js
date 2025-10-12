import { verificarADM } from "../model/DAO/verificarADM.js";

export const loginAdmGet = (req, res) => {
  res.render("auth/loginAdmin");
};

export const loginAdmPost = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await verificarADM(email, senha);

    if (!usuario || usuario.length === 0) {
      return res.status(400).json({
        title: "Erro no login",
        message: "E-mail ou senha inválidos. ❌",
      });
    }

    if (senha !== usuario[0].senha) {
      return res.status(400).json({
        title: "Erro no login",
        message: "E-mail ou senha inválidos. ❌",
      });
    }

    req.session.login = usuario;
    return res.status(200).json({
      title: "Login de usuário",
      message: "Usuário logado com sucesso! ✅",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      title: "Erro interno",
      message: "Erro ao processar o login. ❌",
    });
  }
};
