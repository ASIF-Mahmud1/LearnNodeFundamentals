
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
    function refreshLetters(refreshMe)      /// works fine. It reset node.visited to false
{
    refreshMe.forEach(function(part, index, theArray) {
        theArray[index].visited =false
      })
}

    function allVisited(listOfLetters)   // returns true/false
    {
        let count=0
        for(let i=0;i<listOfLetters.length;i++)
        {
            if(listOfLetters[i].visited==true)
            {
                count++
            }
        }

        if(count==listOfLetters.length)
        {
            return true
        }

        else
        {
            console.log(listOfLetters.length-count," letter not visited. function: allVisted() \n")
            return false
        }
    }


//     let howManyTime=0

//    while(! allVisited(allLetters))
//    {
//     allLetters.forEach(function(node, index, theArray) {
//         if(node.visited==false)
//         {
//             theArray[index].visited =true

//         }
//       })

//       howManyTime++
//    }

//    console.log("while loop ran ", howManyTime, " times")
 
   console.table(allLetters)
   let ultimateArray=[]
   function blackBox(startLetterIndex,word_length,allLetters)
   {
       refreshLetters(allLetters)
       allLetters[startLetterIndex].visited=true
       let str= allLetters[startLetterIndex].letter
        console.table(allLetters)
        while(!allVisited(allLetters))
        {
            
            for(let i=0;i<allLetters.length;i++)
            {
                allLetters[i].visited=true
    //            if(allLetters[i].visited==false)
    //            {
    //                let temp= str+ allLetters[i].letter
    //                if(temp.letter==word_length)
    //                {
    //                     ultimateArray.push(temp)
    //                     allLetters[i].visited=true
    //                }
    //                else if(temp.length<word_length)
    //                {
    //                    str= str+ allLetters[i].letter
    //                    allLetters[i].visited=true

    //                }
    //            }
            }
        }
   }

   ///////////////////////////////////////
   let startLetterIndex=0
   let word_length=2
   blackBox(startLetterIndex,word_length,allLetters)

   console.log("All visited ", allVisited(allLetters))
   

   ///////////////////////////////////////