const app = require('./index')
const PORT = process.env.PORT || 3003

const server = app.listen(PORT, ()=>{
    console.log(`connected on port ${PORT}`)
})

module.exports = server