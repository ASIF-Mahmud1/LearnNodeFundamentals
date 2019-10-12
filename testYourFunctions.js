
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

    let informMe= allVisited(allLetters)
    console.log(informMe)