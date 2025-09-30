export const dashboardGet = (req, res) => {
	if(req.session.login) {
		const [user] = req.session.login;

		if(user.role === "admin") {
			res.render("dashboard", { user: user, auth: true });
		} else {
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
}

export const dashboardPost = (req, res) => {
	
}