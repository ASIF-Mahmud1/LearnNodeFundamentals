const fs = require("fs")
const PossibleWords =require('./permutation')

let dictionary=[]
let intersection=[]


fs.readFile('dictionary.txt', 'utf8',(err, data) => {
   if (err) throw err;
   dictionary= data.split("\r")
   let temp = dictionary.map((item,index)=>{ return item.substring(1, item.length )   })
  // console.table(PossibleWords)

    intersection = temp.filter(element => PossibleWords.includes(element));
   console.table(intersection)

 });

 module.exports= intersection