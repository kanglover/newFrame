var express = require('express')

module.exports = function() {
  var router = express.Router()

  router.post('/save', (req, res) => {
    console.log(req)
  })

  return router
}
