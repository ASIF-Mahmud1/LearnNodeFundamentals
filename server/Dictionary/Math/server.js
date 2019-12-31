const express = require('express')
const cors = require('cors')
const app = express()
var bodyParser = require('body-parser')

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
    console.log(req.body)
    //  res.json({message: req.body})
    res.status(200).json({
        message: 'Successfully saved the content!',
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
