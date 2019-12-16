const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/question', (req, res) => {
  res.render('question');
});

app.listen(8081, () => {
  console.log('Servico em execucao');
});
