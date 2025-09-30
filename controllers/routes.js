import express from "express";

import { homeGet } from "./homeController.js"
import { cadastroGet, cadastroPost } from "./cadastroController.js";
import { loginGet, loginPost } from "./loginController.js";
import { dashboardGet, dashboardPost } from "./dashboardController.js";
import { loginAdmGet, loginAdmPost } from "./loginAdmController.js";

const route = express.Router();

route.get("/", homeGet);

// Métodos de cadastro
route.get("/cadastro", cadastroGet);
route.post("/cadastro", cadastroPost);

// Métodos de login
route.get("/login", loginGet);
route.post("/login", loginPost);

// Sair da conta
route.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

route.get("/admin", loginAdmGet);
route.post("/admin", loginAdmPost);

route.get("/dashboard", dashboardGet);
route.post("/dashboard", dashboardPost);

export default route;
