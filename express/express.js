const express = require('express')
const path = require('path')
const api = require('./api')

const app = express()

// Se till att ändra här så ni hamnar i rätt mapp!
const handleStaticFiles = express.static(path.join(__dirname, '..', 'todo', 'build'))
app.use(handleStaticFiles)

app.use(api)

/*
app.get('/', (request, response) => {
  response.status(200)
  response.send('Hello world')
})
*/
app.listen(8080, () => {console.log('Server started!')})