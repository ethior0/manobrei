import express from "express";
import { engine } from "express-handlebars";

const app = express();
const porta = 3000;

app.use(express.json());

// Corrigir: Servir só a pasta 'public'
app.use(express.static("public"));

// Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/cadastro", (req, res) => {
    res.render("cadastro");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.listen(porta, () => {
    console.log(`Acessar em http://localhost:${porta}`);
});
