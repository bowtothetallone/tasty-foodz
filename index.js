const express = require('express')
const app = express()
const port = process.env.PORT

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'))


var date = new Date()
var receivedDate = String(date.getMonth() + 1).padStart(2, '0') + '/' + String(date.getDate()).padStart(2, '0') + '/' + date.getFullYear()
var responseDate = String(date.getMonth() + 1).padStart(2, '0') + '/' + String(date.getDate()+3).padStart(2, '0') + '/' + date.getFullYear()

app.get('/kitties-are-great', (request, response) => {
  console.log('A page was loaded!', request.url)
  response.send('Kitties are great!')
})

app.post('/contact', (request, response) => {
  console.log('A post was submitted', request.body)
  response.send(`Thanks ${request.body.name} for telling us "${request.body.message}!" We received your message on ${receivedDate} and will respond by ${responseDate}. Or else.`)
})

app.listen(
  port,
  () => {
    console.log(`Example app listening on port ${port}!`)
  }
)
