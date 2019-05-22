const express = require('express')
const app = express()
const port = process.env.PORT

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'))

app.get('/kitties-are-great', (request, response) => {
  console.log('A page was loaded!', request.url)
  response.send('Kitties are great!')
})

app.post('/contact', (request, response) => {
  console.log('A post was submitted', request.body)
  response.send(`Thanks ${request.body.name} for telling us "${request.body.message}"! You are awesome sauce.`)
})

app.listen(
  port,
  () => {
    console.log(`Example app listening on port ${port}!`)
  }
)
