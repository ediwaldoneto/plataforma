const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');

//Verificando conexao com o banco de dados
connection
  .authenticate()
  .then(() => {
    // console.log('Conectado com DB');
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

//Rota pagina Home
app.get('/', (req, res) => {
  Pergunta.findAll({ raw: true, order: [['id', 'DESC']] }).then(perguntas => {
    res.render('home', {
      perguntas: perguntas
    });
  });
});

//Rota pagina de Perguntas
app.get('/question', (req, res) => {
  res.render('question');
});

//Pesquisando pergunta por ID
app.get('/question/:id', (req, res) => {
  var id = req.params.id;
  Pergunta.findOne({
    where: { id: id }
  }).then(pergunta => {
    if (pergunta != undefined) {
    } else {
    }
  });
});

//Rota para salvar dados da pergunta
app.post('/send', (req, res) => {
  var title = req.body.title;
  var desc = req.body.desc;
  Pergunta.create({
    titulo: title,
    descricao: desc
  }).then(() => {
    res.redirect('/');
  });
});

app.listen(8081, () => {
  console.log('Servico rodando na porta 8081');
});
