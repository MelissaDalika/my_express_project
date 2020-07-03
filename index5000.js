const express = require('express')
const path = require('path')
const app = express()

app.get('/utenti', (req, res) => {
  res.status(200).sendFile(path.join(__dirname,  '/views/utenti.html'))
})
app.get('/articoli', (req, res) => {
  res.status(200).sendFile(path.join(__dirname,  '/views/articoli.html'))
})
app.get('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname,  '/views/notfound.html'))
})

app.listen( 5000, () => console.log('5000'));