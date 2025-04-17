const express = require('express')
const fs = require('fs')
const path = require('path')
const os = require('os')
const url = require('url')
require('dotenv').config()

const app = express()
const PORT = 3001

app.use(express.static(__dirname))
app.use(express.json())

app.get('/about', (req, res) => {
  res.send('About this site')
})

app.get('/greet/:something', (req, res) => {
  const name = req.params.something
  res.send('Hello ' + name)
})

app.get('/calculate/:operation/:number1/:number2', (req, res) => {
  const { operation, number1, number2 } = req.params
  let num1 = parseFloat(number1)
  let num2 = parseFloat(number2)
  let result

  if (operation.toLowerCase() === 'add') {
    result = num1 + num2
  } else if (operation.toLowerCase() === 'subtract') {
    result = num1 - num2
  } else if (operation.toLowerCase() === 'multiply') {
    result = num1 * num2
  } else if (operation.toLowerCase() === 'divide') {
    result = num1 / num2
  } else {
    res.status(400).send('Invalid operation')
    return
  }

  res.send(`The result of ${operation} ${number1} and ${number2} is: ${result}`)
})

app.get('/cod-stats', (req, res) => {
  const username = req.query.username || 'UnknownPlayer'

  res.json({
    player: username,
    stats: {
      kills: 1234,
      wins: 42,
      kdRatio: 1.76
    }
  })
})

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
