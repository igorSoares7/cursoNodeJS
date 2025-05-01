import express, { Request, Response } from "express";
import { parse } from "path";

const app = express();
//habilita a leitura de dados em JSON no Post
app.use(express.json());
//habilita a leitura de dados vindos em um formulario via POST
app.use(express.urlencoded({ extended: true}))
const port = 3030;

app.get('/', (req: Request, res:Response):void  => {
    res.send('Hello world with Express usando TS!');
});

app.get("/clientes", (req:Request, res:Response):void => {
    console.log(req.query)
    const {nome, idade} = req.query as {nome: string, idade: string}

    res.send(`Meu cliente: ${nome}, idade: ${parseInt(idade)}`)
});

app.get("/clientes/:id", (req:Request, res:Response):void => {
    console.log(req.params)

    const {id} = req.params as {id:string}
    res.send(`Clientes com parâmetro - ID ${id}`)
});

//Tratando os dados vindos via POST
app.post("/clientes", (req: Request, res:Response):void => {
    const { nome , idade, genero} = req.body as { nome: string; idade: string, genero: string}
    let mensagem = '';

    if (parseInt(idade) >= 18) {
        mensagem = 'Já pode ter habilitação'
    } else {
        mensagem = 'Não pode ter CNH'
    }

    res.send(`POST CLIENTES: ${nome}, ${idade} - ${mensagem}, genero = ${genero}`)
});

app.post("/calculadora", (req:Request, res:Response):void => {
    const {numero1, numero2, operacao} = req.body as {numero1:string, numero2:string, operacao:string}
    const num1 = parseInt(numero1);
    const num2 = parseInt(numero2);
    let resultado;
    switch (operacao) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operação inválida"
    }
    res.json({
        "resultado":resultado
    })
})

app.listen(port, () => {
    console.log(`servidor executando na porta ${port}`);
});

