const fs = require("fs")
const PossibleWords =require('./permutation')

let dictionary=[]
let intersection=[]




 function getListOfWords(callBack)
 {
  fs.readFile('dictionary.txt', 'utf8',(err, data) => {
    if (err) throw err;
    dictionary= data.split("\r")
    let temp = dictionary.map((item,index)=>{ return item.substring(1, item.length )   })
 
     intersection = temp.filter(element => PossibleWords.includes(element))

     callBack(intersection)
  });

 }
 getListOfWords((words)=>{
  //  console.log(words)
  //  console.log("Hi")
 })
 module.exports= getListOfWords