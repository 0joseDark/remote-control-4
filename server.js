const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 80;

app.use(express.static('public'));
app.use(express.json());

app.post('/control', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:5000/gpio', req.body);
    res.send(response.data);
  } catch (error) {
    console.error('Erro ao enviar comando:', error);
    res.status(500).send('Erro ao controlar GPIO');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor na porta ${PORT}`);
});
