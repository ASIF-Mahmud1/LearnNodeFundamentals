let outer= ['a','b','c','d']
let inner= ['a','b','c','d']

outer.forEach(function(node, index, theArray) {
    inner.forEach((item,index2)=>{
        if( ! node.includes(item) )
        {
            outer.push(node+item)
        }
    })
    console.log(outer.length, outer)
    
  //  theArray[index].visited =false
  })

  console.table(outer)


//////////////////////////
//   let str= 'asadsa'

//   let a= 'b'
//   let p= str.includes(a)
// console.log(p)
