const express = require('express')
const app = express()
const mustache = require('mustache-express')
const userdata = require('../models/user.js')
const router = require('../routes')
const data = require('data.js')

app.engine('mustache', mustache())
app.set('view engine', 'mustache')

app.listen(3000, function(){
  console.log('sona alert')
})
