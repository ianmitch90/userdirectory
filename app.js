
const express = require('express')
const mustacheExpress = require('mustache-express')
const data = require('./user.js')
const app = express()
const bodyparser = require('body-parser')
app.use(express.static(__dirname + '/public'))

app.engine('mustache', mustacheExpress())
app.set('views', 'views/')
app.set('view engine', 'mustache')

app.get('/', function (req, res) {
  res.render('index', {users: data.users})
})

app.get('/:id', function (req, res) {
  var id = req.params.id - 1;
  res.render('card', {users: data.users[id]})
})

app.listen(3000, function () {
  console.log('sona')
})
