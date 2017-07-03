const express = require('express')
const app = express()
const router = express.Router();
const data = require('/data.js')

app.get('/', function (req, res) {
  res.send('index')
})
