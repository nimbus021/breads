//DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')


//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
console.log(PORT)

//MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))




//ROUTES
app.get('/', (req,res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

//BREADS
const breadsContoller = require('./controllers/bread_controller.js')
app.use('/breads', breadsContoller)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })

//LISTEN
app.listen(PORT, () => {
    console.log('nomming at port', PORT);
})