import express from "express";
import { cadastroGet, cadastroPost } from "../controllers/cadastroController.js";

const route = express.Router();

// Rota principal
route.get("/", cadastroGet);
route.post("/", cadastroPost);

export default route;