const express = require('express')
const path = require('path')
const app = express()
const router = require('./routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/', router)

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})
