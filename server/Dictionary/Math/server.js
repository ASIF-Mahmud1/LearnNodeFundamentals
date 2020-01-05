const express = require('express')
const cors = require('cors')
const app = express()
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const Topic = require('./models/topic.model')

// console.log(Topic)

//console.log(process.memoryUsage())
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())
app.use(cors())
const port = 5000

app.get('/', function (req, res) {
    console.log("Get Request / ")
    res.json({ a: "Math is good" })
})

app.post('/', function (req, res) {
    console.log("Post Request /")
    let topic= new Topic();
topic.body = req.body.a;
topic.save(function (err) {
    if(err)
    {
        console.log("Sth went wrong")
    }
    else 
    {
        console.log("All gucci")
    }
  //
});
    console.log(req.body)
    //  res.json({message: req.body})
    res.status(200).json({
        message: 'Successfully saved the content!',
    })
})


let mongoUri='mongodb://localhost/my_database'

mongoose.Promise = global.Promise
mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true })
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
