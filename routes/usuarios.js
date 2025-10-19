import express from "express";
import { usuariosDelete, usuariosGet, usuariosPatch } from "../controllers/usuariosController.js";

const route = express.Router();

// Rota principal
route.get("/", usuariosGet);
route.patch("/:id", usuariosPatch);
route.delete("/:id", usuariosDelete);

export default route;