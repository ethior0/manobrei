import express from "express";
import route from "./routes/routes.js";
import session from "express-session";
import { engine } from "express-handlebars";

const app = express();
const porta = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuração da sessão
app.use(session({
  secret: "dmaso-dmasopdjm-0941kj0dopasmpdo asd",
  resave: false,
  saveUninitialized: false
}));

app.use(express.static("public"));
app.use(express.static("model"));

// Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Rotas
app.use(route);

// Rota de 404
app.use((req, res) => {
  const msg = {
    mensagem: "Página não encontrada!"
  }
  res.status(404).render("error", { msg });
});

app.listen(porta, () => {
  console.log(`Acessar em http://localhost:${porta}`);
});
