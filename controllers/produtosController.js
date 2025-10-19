export const produtosGet = (req, res) => {
  const [user] = req.session.login;

  res.render("dashboard/produtos", { user: user, auth: true });
}