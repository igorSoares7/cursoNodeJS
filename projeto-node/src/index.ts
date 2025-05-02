import express, { Request, Response } from "express";
import path from "path";

const app = express();
//habilita a leitura de dados em JSON no Post
app.use(express.json());
//habilita a leitura de dados vindos em um formulario via POST
app.use(express.urlencoded({ extended: true}))
//configura uso do PUG
app.set("view engine", "pug")
app.set("views", path.join(__dirname, "templates"))

const port = 3030;

app.get('/', (req: Request, res:Response):void  => {
//home é o nome do arquivo dentro do diretorio de templates
    res.render("home", {
        titulo: "Página em PUG",
        nome: "Igor",
        idade: 12,
        cidades: ["Porto Alegre", "São Paulo", "Rio de Janeiro"],
    });
});

app.get("/clientes", (req: Request, res:Response):void  => {
    res.render("clientes", {
        titulo: "Página de Clientes"
    });
} )

app.listen(port, () => {
    console.log(`servidor executando na porta ${port}`);
});

