//DEPENDENCIES
const express = require('express')


//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
console.log(PORT)

//MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())




//ROUTES
app.get('/', (req,res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

//BREADS
const breadsContoller = require('./controllers/bread_controller.js')
app.use('/breads', breadsContoller)

//LISTEN
app.listen(PORT, () => {
    console.log('nomming at port', PORT);
})