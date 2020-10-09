var express = require('express')
var app = express()
var router = express.Router()

// 解决跨域问题
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})

const appData = require('./data.json')
const questionsData = appData.question
app.get('/api/question', (req, res) => {
  res.json({
    code: 0,
    message: 'success',
    data: questionsData
  })
})

app.use('/api', router)

module.exports = app.listen(9000, function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('success')
})

