const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('BEM VINDO');
});

app.listen(8081, () => {
  console.log('Servico em execucao');
});
