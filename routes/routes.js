import express from "express";

import { homeGet } from "../controllers/homeController.js"

// Routes
import loginRoutes from "./login.js";
import loginAdmRoutes from "./loginAdm.js";
import cadastroRoutes from "./cadastro.js";
import dashboardRoutes from "./dashboard.js";

// Auths
import { authAdmin } from "../middlewares/authAdmin.js";
import { authUser } from "../middlewares/authUser.js";

const route = express.Router();

route.get("/", homeGet);

route.use("/cadastro", authUser, cadastroRoutes)
route.use("/login", authUser, loginRoutes)
route.use("/admin", authUser, loginAdmRoutes);
route.use("/dashboard", authAdmin, dashboardRoutes);

// Sair da conta
route.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

// route.get("/admin/editar/:id", (req, res) => {
//   const idUsuario = req.params.id;
//   res.send(`O ID do usuário a editar informações é: ${idUsuario}`);
// });

// route.post("/admin/deletar/:id", (req, res) => {
//   const idUsuario = req.params.id;
//   res.send(`O ID do usuário a ser deletado é: ${idUsuario}`);
// });

export default route;
