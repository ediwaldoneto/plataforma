const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const PerguntaModel = require('./database/Pergunta');

//Verificando conexao com o banco de dados
connection
  .authenticate()
  .then(() => {
    console.log('Conectado com DB');
  })
  .catch(msgError => {
    console.log('Erro ao conectar ' + msgError);
  });

//Express usando o EJS como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

//BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/question', (req, res) => {
  res.render('question');
});

app.post('/send', (req, res) => {
  var title = req.body.title;
  var desc = req.body.desc;
  res.send('Resposta Recebida  Titulo ' + title + ' ' + 'Descricao ' + desc);
});

app.listen(8081, () => {
  console.log('Servico rodando na porta 8081');
});
