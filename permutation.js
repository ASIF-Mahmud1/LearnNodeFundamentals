let outer= ['a','a','a','a','a']
let inner=['a','a','a','a','a']

let counter=0
while(counter<7)
{
    outer.forEach(function(node, index, theArray) {
        inner.forEach((item,index2)=>{
        	// if( ! node.includes(item) )
            {
				console.log("pendig",index)
				outer.push(node+item)
				let temp =node+ item
				counter= temp.length
            }
        })
    
      })
    counter++
}
let unique = [...new Set(outer)];
console.table(outer)
console.table(unique)
console.log(unique[unique.length-1].length)