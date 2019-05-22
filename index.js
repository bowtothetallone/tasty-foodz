const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/kitties-are-great', (request, response) => {
  console.log('A page was loaded!', request.url)
  response.send('Kitties are great!')
})

app.listen(
  port,
  () => {
    console.log(`Example app listening on port ${port}!`)
  }
)

