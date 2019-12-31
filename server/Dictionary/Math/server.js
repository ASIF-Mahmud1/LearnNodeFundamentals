const express = require('express')
const cors = require('cors')
const app = express()
var bodyParser = require('body-parser')

// const getListOfWords =require('./readFromDictionary')
//console.log(process.memoryUsage())
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())
app.use(cors())
const port = 5000
 
app.get('/', function (req, res) {
console.log("Server hitted")
 res.json({a:"Math is good"})
})

app.post('/', function (req, res) {
    console.log("Post Server hitted")
    console.log(req.body)
   //  res.json({message: req.body})
     res.status(200).json({
        message: 'Successfully saved the content!',
      })
    })
    
////////////////////////////////////////////////////////////
// app.get('/getMyEquations', (req, res) =>{
//   getListOfWords((words, letters)=>{
//     res.json({words,letters})
//   })
// })

////////////////////////////////////////////////////////////
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
