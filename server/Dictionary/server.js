const express = require('express')
const cors = require('cors')
const app = express()
const getListOfWords =require('./readFromDictionary')

app.use(cors())
const port = 4000
 
app.get('/', function (req, res) {
  //  res.
 //  res.body({a: "lol"}) 
  //res.send('Hello World')
 res.json({a:"good"})
})

app.get('/listWords', (req, res) =>{
  getListOfWords((words)=>{
  //  console.log(words)
    res.json(words)
  })
    let sed= {a:"trash", fun: getListOfWords}
    //res.body({a: "lol"}) 

   // res.send('Hello World')

  //  res.json(sed)

})
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
