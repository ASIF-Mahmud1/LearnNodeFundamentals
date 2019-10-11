/*
https://dev.to/ccleary00/how-to-rewrite-a-callback-function-in-promise-form-and-asyncawait-form-in-javascript-410e
https://github.com/coreyc/converting-callbacks/blob/master/index.js
*/

// const addNum = (firstNum, secondNum, callback) => {
//     setTimeout(() => {
//       if (!firstNum && secondNum) {
//           console.log('If')
//           return callback(new Error('no first name passed in!'))
//         }
//         else 
//         {
//             return callback(firstNum+secondNum)

//         }
      
      
      
//     }, 2000)
//   }

//   addNum((item)=>{console.log(item)})

const callbackFn = (firstName, callback) => {
    setTimeout(() => {
      if (!firstName) return callback(new Error('no first name passed in!'))
      
      const fullName = `${firstName} Doe`
      
      return callback(fullName)
    }, 2000)
  }
  
  callbackFn('John', console.log)
  callbackFn(null, console.log)