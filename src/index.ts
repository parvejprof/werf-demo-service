import express from 'express';

const { API_KEY } = process.env;

const app = express();

app.get('/', (req, res) => {
  res.send(`Secret value: ${API_KEY}`);
});

app.listen(8080);
