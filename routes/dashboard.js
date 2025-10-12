import express from "express";

import { dashboardGet } from "../controllers/dashboardController.js";
import { usuariosGet } from "../controllers/usuariosController.js";
import { categoriasGet } from "../controllers/categoriasController.js";

const route = express.Router();

// Rota principal
route.get("/", dashboardGet);

// Rotas filhas
route.use("/usuarios", usuariosGet);
route.use("/categorias", categoriasGet);

export default route;
