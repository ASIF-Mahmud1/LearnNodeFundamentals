
let num= [1,,4,4,6,7,8,9]
// console.table(num)

 num.forEach(function(part, index, theArray) {
    theArray[index] = theArray[index]+1
  })

//console.table(num)
///////////////////////////////////////////////////////

function refreshLetters(refreshMe)      /// works fine. It reset node.visited to false
{
    refreshMe.forEach(function(part, index, theArray) {
        theArray[index].visited =false
      })
}

let iterateLetters= [
{
    letter: 'a',
    visited: false
},
{
    letter: 'b',
    visited: false
},
{
    letter: 'c',
    visited: false
},
{
    letter: 'd',
    visited: false
}
]

let allLetters= [
    {
        letter: 'a',
        visited: false
    },
    {
        letter: 'b',
        visited: false
    },
    {
        letter: 'c',
        visited: false
    },
    {
        letter: 'd',
        visited: false
    }
    ]
let ultimateArray=[]
let iterateHowManyTimes=2
    
//console.table(allLetters)
// console.table(iterateLetters)

iterateLetters.forEach((startLetter,index)=>{
    let count=0
    let temp=''
    refreshLetters(allLetters)
    while(count<=iterateLetters.length-1 )
    {
        allLetters.forEach(function(node, innerIndex, theArray) {
            if(node.visited==false && index!=innerIndex)
            {
                temp=startLetter.letter+node.letter
                if(temp.length==iterateHowManyTimes)
                {
                    console.log(temp)
                    ultimateArray.push(temp)
                    theArray[innerIndex].visited=true
                }
            }
          })
          count++ 
    }
})

console.log(ultimateArray.length)












////////////////////////////////////////////////////////
