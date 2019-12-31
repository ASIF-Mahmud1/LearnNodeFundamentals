const express = require('express')
const cors = require('cors')
const app = express()
// const getListOfWords =require('./readFromDictionary')
//console.log(process.memoryUsage())
app.use(cors())
const port = 5000
 
app.get('/', function (req, res) {

 res.json({a:"Math is good"})
})

////////////////////////////////////////////////////////////
// app.get('/getMyEquations', (req, res) =>{
//   getListOfWords((words, letters)=>{
//     res.json({words,letters})
//   })
// })

////////////////////////////////////////////////////////////
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
