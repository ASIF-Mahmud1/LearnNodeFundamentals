const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
const port = 4000
 
app.get('/', function (req, res) {
  //  res.
 //  res.body({a: "lol"}) 
  //res.send('Hello World')
 res.json({a:"good"})
})

app.get('/listWords', (req, res) =>{
    let sed= {a:"trash"}
    //res.body({a: "lol"}) 

   // res.send('Hello World')

    res.json(sed)

})
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
