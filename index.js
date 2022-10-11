const express = require('express')
const session = require('express-session')
const cors = require("cors");
const cryptoRouter = require('./routes/crypto')

const app = express()

app.use(cors());
app.all('*', function(req, res, next){
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Acces-Control-Allow-Headers", "X-requested-With");
     res.header('Access-Control-Allow-Headers', "Content-Type");
     next()
})

app.get('/', (req, res)=>{
     console.log('working')
     res.send({site: 'working'})
})

app.use('/crypto', cryptoRouter)

console.log('og master 300')

module.exports = app



