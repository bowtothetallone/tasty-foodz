const express = require('express')
const app = express()
const port = process.env.PORT
const mailgun = require("mailgun-js");

const domain = process.env.MAILGUN_DOMAIN
const apiKey = process.env.MAILGUN_APIKEY
const configuredMailgunInstance = mailgun({apiKey, domain});

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json())

app.use(express.static('public'))

app.get('/kitties', (request, response) => {
  console.log('A page was loaded!', request.url)
  response.send('Kitties are great!')
})

var formatDateForAmericansThatThinkIncorrectlyAboutDates = function (date) {
  // before
  // String(date.getMonth() + 1)+ '/' + String(date.getDate()).padStart(2, '0') + '/' + date.getFullYear()
  var year = date.getFullYear()
  var month = ('' + (date.getMonth() + 1)).padStart(2, '0') 
  var day = ('' + date.getDate()).padStart(2, '0')
  return month + '/' + day + '/' + year
}

app.post('/contact', (request, response) => {
  var today = new Date()
  var threeDays = 3 * 24 * 60 * 60 * 1000
  var todayPlusThreeDays = new Date(today.getTime() + threeDays)
  var receivedDate = formatDateForAmericansThatThinkIncorrectlyAboutDates(today)
  var responseDate = formatDateForAmericansThatThinkIncorrectlyAboutDates(todayPlusThreeDays)
  console.log('A post was submitted', request.body)
  var result = {
    message: `Thanks ${request.body.name} for telling us "${request.body.message}!" We received your message on ${receivedDate} and will respond by ${responseDate}. Or else.`
  }
  
  const from = `${request.body.name} <${request.body.email}>`
  const data = {
    from,
    to: 'info@resilienthope.org',
    subject: 'Tasty-Foodz Form Submission',
    text: `New Message from ${from}:
${request.body.message}`
  };
  configuredMailgunInstance.messages().send(data, function (error, body) {
    console.log(body);
  });
  
  response.json(result)
})

app.listen(
  port,
  () => {
    console.log(`Example app listening on port ${port}!`)
  }
)
