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

export const loginPost = (req, res) => {
  
}