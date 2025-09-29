import bcrypt from "bcrypt";
import { verificarUsuario } from "../model/DAO/verificarUsuario.js";

export const loginGet = (req, res) => {
  if(req.session.login) {
    const [user] = req.session.login;
    const msg = {
      mensagem: "Você já está logado em uma conta!",
      auth: true,
    }
    res.render("error", { msg, user: user });
  } else {
    res.render("login");
  }
}

export const loginPost = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await verificarUsuario(email, senha);
    const senhaValida = await bcrypt.compare(senha, usuario[0].senha); 

    if (!usuario || usuario.length === 0 || !usuario[0].senha) {
      return res.status(400).json({
        title: "Erro no login",
        message: "E-mail ou senha inválidos. ❌",
      });
    }

    if (!senhaValida) {
      return res.status(400).json({
        title: "Erro no login",
        message: "Erro. E-mail ou senha inválidos. ❌",
      });
    }

    req.session.login = usuario;
    return res.status(200).json({ 
      title: "Login de usuário",
      message: 'Usuário logado com sucesso! ✅' 
    });
  } catch(err) {
    console.error(err);
    res.status(500);
  }
}