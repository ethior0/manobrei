import { inserirUsuario } from "../model/DAO/inserirUsuario.js";
import { verificarUsuario } from "../model/DAO/verificarUsuario.js";

export const cadastroGet = (req, res) => {
  if(req.session.login) {
    const [user] = req.session.login;
    const msg = {
      mensagem: "Você já está logado em uma conta!",
      auth: true,
    }
    res.render("error", { msg, user: user });
  } else {
    res.render("cadastro");
  }
}

export const cadastroPost = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const resultado = await inserirUsuario(nome, email, senha);

    if(resultado) {
      req.session.login = await verificarUsuario(email, senha);

      res.json({ 
        title: "Cadastro de usuário",
        message: 'Usuário cadastrado com sucesso! ✅' 
      });
    } else {
      res.json({
        title: "Erro no cadastro",
        message: 'Erro. Este e-mail já está em uso. ❌'
      });
    }
  } catch(err) {
    console.error(err);
    res.status(500);
  }
}