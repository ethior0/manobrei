import express from "express";
import { engine } from "express-handlebars";

const app = express();
const porta = 3000;

app.use(express.json());

// Pastas estáticas
app.use(express.static("model/"));
app.use(express.static("public/"));
app.use(express.static("controller/"));
app.use(express.static("node_modules/"));

// Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set('views', './views');

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(porta, () => {
    console.log(`Acessar em http://localhost:${porta}`);
});