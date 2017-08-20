var express = require('express')
var router = express.Router()

var db = require('../db/words')

router.get('/', (req, res) => {
  db.getWords(req.app.get('db'))
    .then((words) => {
      res.json(words)
    })
  .catch((err) => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.get('/bias', (req, res) => {
  db.getBias(req.query.bias, req.app.get('db'))
    .then((word) => {
      res.json(word)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
