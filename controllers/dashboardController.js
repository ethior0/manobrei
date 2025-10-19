export const dashboardGet = (req, res) => {
  const [user] = req.session.login;

  res.render("dashboard/dashboard", { user: user, auth: true });
}