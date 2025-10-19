export const pedidosGet = (req, res) => {
  const [user] = req.session.login;

  res.render("dashboard/pedidos", { user: user, auth: true });
}