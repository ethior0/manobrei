import { inserirUsuario } from "../model/DAO/inserirUsuario.js";
import { verificarUsuario } from "../model/DAO/verificarUsuario.js";

export const cadastroGet = (req, res) => {
  res.render("auth/cadastro");
}

export const cadastroPost = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const resultado = await inserirUsuario(nome, email, senha);

    if(resultado) {
      req.session.login = await verificarUsuario(email, senha);

      res.status(200).json({ 
        title: "Cadastro de usuário",
        message: 'Usuário cadastrado com sucesso! ✅' 
      });
    } else {
      res.status(400).json({
        title: "Erro no cadastro",
        message: 'Erro. Este e-mail já está em uso. ❌'
      });
    }
  } catch(err) {
    console.error(err);
    res.status(500);
  }
}