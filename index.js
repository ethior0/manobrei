import express from "express";
import route from "./controllers/routes.js";
import session from "express-session";
import { engine } from "express-handlebars";

const app = express();
const porta = 3000;

app.use(express.json());

// Configuração da sessão
app.use(session({
  secret: "dmaso-dmasopdjm-0941kj0dopasmpdo asd",
  resave: false,
  saveUninitialized: false
}));

// Corrigir: Servir só a pasta 'public'
app.use(express.static("public"));
app.use(express.static("model"));

// Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Rotas
app.use(route);

app.listen(porta, () => {
  console.log(`Acessar em http://localhost:${porta}`);
});
