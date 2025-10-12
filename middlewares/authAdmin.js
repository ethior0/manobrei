export const authAdmin = (req, res, next) => {
  if(req.session.login) {
    const [user] = req.session.login;

    if(user.role === "user") {
      const msg = {
        mensagem: "Você não tem permissão para entrar nessa página!",
        auth: true,
      }
      res.render("error", { msg });	
    }
  } else {
    const msg = {
      mensagem: "Página não encontrada!",
      auth: false,
    }
    res.render("error", { msg });
  }
  next();
}