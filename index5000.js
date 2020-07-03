const express = require('express')
const path = require('path')
const app = express()

app.get('/utenti', (req, res) => {
  res.status(200).sendFile(path.join(__dirname,  '/utenti.html'))
})
app.get('/articoli', (req, res) => {
  res.status(200).sendFile(path.join(__dirname,  '/articoli.html'))
})
app.get('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname,  '/notfound.html'))
})

app.listen( 5000, () => console.log('Listening on port 5000'));