const express = require('express')
const path = require('path')
const app = express()


app.use('/', express.static("public"));

app.get('/about', (req, res) => {
  res.status(200).sendFile(path.join(__dirname,  '/views/about.html'))
})

app.get('/utenti/:id_utente', (req, res) => {
  console.log(`questa è la pagina dell'utente con id ${req.params.id_utente}`)
  res.send(`questa è la pagina dell'utente con id ${req.params.id_utente}`)
})

//app.get('/articoli', (req, res) => {
//  res.status(200).sendFile(path.join(__dirname,  '/views/articoli.html'))
//})

app.get('/articoli', (req, res) => {
  console.log(`Questa pagina contiene gli articoli dell'utente con id ${req.query.utente}`)
  res.send(`Questa pagina contiene gli articoli dell'utente con id ${req.query.utente}`)
})

app.get('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname,  '/views/notfound.html'))
})

app.listen( 3000, () => console.log('Listening on port 3000'));