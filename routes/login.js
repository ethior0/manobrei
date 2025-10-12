import express from "express";
import { loginGet, loginPost } from "../controllers/loginController.js";

const route = express.Router();

// Rota principal
route.get("/", loginGet);
route.post("/", loginPost);

export default route;