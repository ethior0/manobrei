import express from "express";

import { homeGet } from "./homeController.js"
import { cadastroGet, cadastroPost } from "./cadastroController.js";
import { loginGet } from "./loginController.js";

const route = express.Router();

route.get("/", homeGet);

// Métodos de cadastro
route.get("/cadastro", cadastroGet);
route.post("/cadastro", cadastroPost);

// Métodos de login
route.get("/login", loginGet);

// Sair da conta
route.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

export default route;