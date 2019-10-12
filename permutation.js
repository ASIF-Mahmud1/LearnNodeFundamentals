let outer= ['a','b','c','d','e']
let inner= ['a','b','c','d','e']
let counter=0
while(counter<4)
{
    outer.forEach(function(node, index, theArray) {
        inner.forEach((item,index2)=>{
            if( ! node.includes(item) )
            {
                outer.push(node+item)
            }
        })
    
      })
    counter++
}
let unique = [...new Set(outer)];
console.table(unique)