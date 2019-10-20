// let outer= ['a','a','a','a','a']
// let inner=['a','a','a','a','a']
let outer= ['e','m','o','u','s']  
let inner=['e','m','o','u','s']


let counter=0
// while(counter<7)
// {
//     outer.forEach(function(node, index, theArray) {
//         inner.forEach((item,index2)=>{
//         	// if( ! node.includes(item) )
//             {
// 				console.log("pendig",index)
// 				outer.push(node+item)
// 				let temp =node+ item
// 				counter= temp.length
//             }
//         })
    
//       })
//     counter++
// }

//////////////////////////////////


let ticker=0
let wordLength= inner.length
while(counter<=wordLength)
{
    let arrayTemp=[]

    for(let i=ticker;i<outer.length;i++ )
    {
       inner.forEach((item,index2)=>{
        let temp= outer[i]+item   
        arrayTemp.push(temp)
        counter=temp.length
       }) 
    }
   // console.log()
   // console.table(arrayTemp)
    ticker= outer.length
    outer=outer.concat(arrayTemp)
    counter++
}


//////////////////////////////////


let unique = [...new Set(outer)];
// console.table(outer)
// console.table(unique)
// console.table(inner)
// console.log(outer.length)

// console.log(unique.length)

// export default unique

// exports.Permutation=()=>{unique }
module.exports = unique;




















