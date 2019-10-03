'use strict';
/// **** skeleteon
var promise = new Promise(function (fulfill, reject) {
  function addNum(firsNum,secondNum)
  {
      return firsNum+secondNum
  }
  // we can send function definition as promise resolve
  fulfill(addNum)
  reject("failed")

});

 promise.then((onFulfilled)=>{ 
  //  console.log("then",onFulfilled)
    let result= onFulfilled(3,5)
    console.log("result of the  function that we get from the promise ",result)

    // console.log("then",reject)
    }
     ).catch((error)=>{
         console.log(error)
     })
//promise.catch((res)=>console.log(res))

/// **** skeleteon