import express from 'express';
import path from 'path';
import { readFile } from 'fs/promises';
import cors from 'cors';
import fs from 'fs';

const PORT = process.env.PORT || 3000;
const app = express();


app.use(cors());
app.use(express.static('data'))
app.use(express.json());

app.get('/products', (req, res) => {
  const phonesData = fs.readFileSync('./data/phones.json', 'utf-8');

  res.statusCode = 200;

  res.send(JSON.parse(phonesData));
});

app.get('/products/:productId', (req, res) => {
  const data = JSON.parse(fs.readFileSync('./data/phones.json', 'utf-8'));

  const { name } = data.find(phone => phone.id === req.params.productId);

  const phonePath = name.split(' ').join('-');

  const foundPhone = fs.readFileSync(`./data/phones/${phonePath.toLowerCase()}.json`, 'utf-8');

  res.send(JSON.parse(foundPhone));
});



app.get("/", (req, res) => {
  res.status(200).send("Hello World");

});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
})
