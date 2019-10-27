const express = require('express')
const cors = require('cors')
const app = express()
const getListOfWords =require('./readFromDictionary')

app.use(cors())
const port = 4000
 
app.get('/', function (req, res) {

 res.json({a:"good"})
})

app.get('/listWords', (req, res) =>{
  getListOfWords((words, letters)=>{
    res.json({words,letters})
  })
})
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
