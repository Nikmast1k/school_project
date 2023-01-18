// Require everything we need
const express = require('express')
const path = require("path")
require('dotenv').config({ path: './.env' })
//app
const app = express()

app.use(express.urlencoded())

app.set("view engine", "ejs")

app.use("/", express.static(path.join(__dirname, "public")))
const logger = require('./middleware/logger')
const indexRouter = require('./routes/pocketsage')
const error_404 = require('./middleware/error-404')
app.use('/', indexRouter)
app.use(error_404)
app.use(logger)


//start
const PORT = process.env.PORT || 3002
app.listen(PORT)
console.log(`Server is listening port ${PORT}`)
