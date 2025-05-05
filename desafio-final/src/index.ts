import express, { Request, Response } from "express";
import path from "path";

const app = express();
//habilita a leitura de dados em JSON no Post
app.use(express.json());
//habilita a leitura de dados vindos em um formulario via POST
app.use(express.urlencoded({ extended: true}))
//configura uso do PUG
app.use(express.static("public"));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "templates"));

const port = 3030;

app.get('/', (req: Request, res:Response):void  => {
//home é o nome do arquivo dentro do diretorio de templates
    res.render("home", {
        titulo: "Desafio Final",
        nome: "Igor"
    });
});

app.get('/clientes', (req: Request, res:Response):void  => {
    res.render("clientes", {
        titulo: "Listagem Clientes",
        clientes: ["João","Maria","Eduardo","Dayane"]
    });
});

app.get('/cadastro', (req:Request, res:Response):void => {
    res.render("cadastro")
});

app.post('/cadastro', (req:Request, res:Response):void => {
    const {nome, email} = req.body as {nome: String, email:String}

    res.render("cadastroPost", {
        nome: nome,
        email: email
    })
})

app.listen(port, () => {
    console.log(`servidor executando na porta ${port}`);
});

