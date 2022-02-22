const express = require('express')
const router = express.Router()

router.get('/say-something', (request, response, next) => {
  response.status(200)
  response.send('Something!')
})

router.get('/give-me-a-list', (request, response, next) => {
  response.status(200)
  response.send([1,2,3,4,5])
})

module.exports = router