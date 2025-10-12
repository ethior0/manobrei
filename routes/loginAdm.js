import express from "express";
import { loginAdmGet, loginAdmPost } from "../controllers/loginAdmController.js";

const route = express.Router();

// Rota principal
route.get("/", loginAdmGet);
route.post("/", loginAdmPost);

export default route;