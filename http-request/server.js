import http from 'http';

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        const aluno = 'Igor Soares'
        const total = 200 + 200
        res.end(`Hello World - Turma de NodeJS. Aluno: ${aluno}, total = ${total}`)
    } else if(req.url === '/clientes'){
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end(`
      <!DOCTYPE html>
      <html lang="pt-BR">
        <head>
          <style>
            body {
                background-color: black
            }
            h1 {
                color: red;
            }
          </style>
        </head>
        <body>
          <h1>Seção de Clientes</h1>
        </body>
      </html>
    `)
    } else if (req.url === '/contato'){
        res.end("Seção de Contato")
    } else {
      res.end("Pagina nao encontrada")
    }
});

const port = 3030

server.listen(port, () => {
    console.log(`Servidor sendo executado na porta ${port}`)
})