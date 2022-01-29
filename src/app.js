const http = require('http')
const path = require('path')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('./database/mongoose')

const userRouter = require('./routers/user')
const transactionRouter = require('./routers/transactions')
const pageRouter = require('./routers/page')

const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.use(bodyParser.json())
app.use(express.json())
app.use(userRouter)
app.use(transactionRouter)
app.use(pageRouter)

module.exports = app