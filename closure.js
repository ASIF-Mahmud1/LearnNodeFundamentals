// https://www.c-sharpcorner.com/UploadFile/f50501/working-with-closure-in-nodejs/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36

// **** Testing with Closure   ****///
function foo(number){
    var bar
    console.log('The number is ',number)
    function zip()
    {
        bar= true
        console.log("bar is ",bar)
    }
    return zip
}
// foo(5)
//  let returnFromFoo= foo()
//  returnFromFoo()

// **** Testing with Closure  ****///

/// *** Simple example that uses closure  *** ////

function substractTwoNumbers(firsNum, secondNum)
{
    let result= firsNum-secondNum
    console.log("The difference is ",result )

    function multiplyResultByUserInput(userInput)
    {
        return  result*userInput
    }
    return multiplyResultByUserInput
}

 let multiplyBy= substractTwoNumbers(10,2)

 console.log(multiplyBy(5))

/// *** Simple example that uses closure  *** ////
