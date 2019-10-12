
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


    let howManyTime=0

   while(! allVisited(allLetters))
   {
    allLetters.forEach(function(node, index, theArray) {
        if(node.visited==false)
        {
            theArray[index].visited =true

        }
      })

      howManyTime++
   }

   console.log("while loop ran ", howManyTime, " times")
 
   console.table(allLetters)