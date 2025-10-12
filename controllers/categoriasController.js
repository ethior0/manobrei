export const categoriasGet = async (req, res) => {
  const [user] = req.session.login;
  
  res.render("dashboard", { user: user, auth: true });
}