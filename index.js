const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.post('/tambah', (req, res) => {
  const { nomor1, nomor2 } = req.body;

  const hasil = nomor1 + nomor2;

  res.send(`Hasil tambah dari ${nomor1} & ${nomor2} adalah ${hasil}`);
})


app.post('/kurang', (req, res) => {
  const { nomor1, nomor2 } = req.body;

  const hasil = nomor1 - nomor2;

  res.send(`Hasil kurang dari ${nomor1} & ${nomor2} adalah ${hasil}`);
})


app.post('/kali', (req, res) => {
  const { nomor1, nomor2 } = req.body;

  const hasil = nomor1 * nomor2;

  res.send(`Hasil kali dari ${nomor1} & ${nomor2} adalah ${hasil}`);
})


app.post('/bagi', (req, res) => {
  const { nomor1, nomor2 } = req.body;

   const hasil = nomor1 / nomor2;

  res.send(`Hasil bagi dari ${nomor1} & ${nomor2} adalah ${hasil}`);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})