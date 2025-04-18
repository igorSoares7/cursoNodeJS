import express, { Request, Response } from "express";

const app = express();
const port = 3030;

app.get('/', (req: Request, res:Response):void  => {
    res.send('Hello world with Express usando TS!');
});

app.get("/json", (req: Request, res: Response): void => {
    const aluno = {
        nome: "Igor",
        dt_nascimento: "06-11-1995",
    };
    res.status(301).json(aluno)

});

app.get("/pdf", (req: Request, res: Response): void => {
    res.contentType("application/pdf")
    res.send("Aqui seria um PDF!")
})

app.get("/xml", (req: Request, res: Response): void => {
    res.contentType("application/xml")
    const xml = `<note>
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
    </note>`;
    res.send(xml)
})

app.get('/clientes', (req:Request, res:Response):void => {
    res.send("Rota de Clientes");
});

app.get('/soma', (req:Request, res:Response):void => {
    const n1 = 10
    const n2 = 20
    const n3 = 1
    const op = n1 + n2 + n3
    res.send(`A soma dos números é ${op}`)
    //content-type é json se for só OP, e text/html se for do jeito q está
    
});

app.get("/horario", (req:Request, res:Response):void => {
    res.contentType("text/html")
    const currentDate = new Date ()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()
    const isEven = seconds % 2 === 0;
    const evenOdd = isEven ? 'par' : 'ímpar'
    const color = isEven? 'blue' : 'red'
    

    res.send(`
        <!DOCTYPE html>
      <html lang="pt-BR">
        <head>
        </head>
        <body>
        <span>${hours}:${minutes}:<span style="color: ${color}">${seconds}</span> => é ${evenOdd}</span>
      `)
})

app.listen(port, () => {
    console.log(`servidor executando na porta ${port}`);
});

