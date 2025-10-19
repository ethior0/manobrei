import express from "express";

import { dashboardGet } from "../controllers/dashboardController.js";
import { categoriasGet } from "../controllers/categoriasController.js";
import { produtosGet } from "../controllers/produtosController.js";
import { pedidosGet } from "../controllers/pedidosController.js";

import usuariosRoute from "./usuarios.js"

const route = express.Router();

// Rota principal
route.get("/", dashboardGet);

// Rotas filhas
route.use("/usuarios", usuariosRoute);

route.get("/categorias", categoriasGet);
route.get("/produtos", produtosGet);
route.get("/pedidos", pedidosGet);

export default route;
