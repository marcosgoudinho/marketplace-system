const express = require('express'); //Importa o framework Express, que facilita a criação de servidores HTTP e APIs no Node.js.
const cors = require('cors');       // Importa o middleware cors, que permite que sua API seja acessada por outras origens (como seu frontend Angular). 
                                    // Isso evita bloqueios por políticas de segurança de navegador (CORS = Cross-Origin Resource Sharing).

const app = express();              //Cria uma instância do Express chamada app, que é o coração da sua API — todas as rotas e middlewares passam por aqui.
const PORT = 3000;                  //Define a porta onde sua API vai rodar. O padrão comum para APIs locais é 3000.

app.use(cors());                    //Habilita o CORS para todas as rotas da API. Isso permite, por exemplo, que seu frontend Angular (que estará em localhost:4200) consiga se comunicar com a API sem erros.
app.use(express.json());            //Esse middleware diz para o Express aceitar requisições JSON no corpo (req.body). Sem isso, req.body viria undefined em POST/PUT.

app.get('/', (req, res) => {        //Cria uma rota HTTP GET na URL /
  res.send('API funcionando!');     //Quando você acessar http://localhost:3000/ no navegador ou via Postman, vai receber a resposta "API funcionando!".
});

app.listen(PORT, () => {            //Inicia o servidor e começa a "escutar" a porta 3000. Quando estiver tudo pronto, exibe a mensagem no terminal: Servidor rodando na porta 3000
  console.log(`Servidor rodando na porta ${PORT}`);
});
