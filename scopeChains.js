// *** nested Scopes
function someFunc() {
    console.log("someFunc")
    function inner() {
        console.log("Function inner() is lexically scoped inside the function someFunc")
    }

    inner()
  }
  // inner function  cannot be called outside the someFunc()
  // inner()

  someFunc()

  // *** nested Scopes

  // ** scope variables

  function outer() {
    var outerVar = 1;
    function inner() {
      var innerVar = 2;
    }

    // innerVar=innerVar+1   // This throws error as expected
     innerVar=10  // this does not throw error. But it should, since it is out of lexical scope
    console.log("inner variable ", innerVar)
  }
  outer()

   // *** scope variables


   // *** scope chains 
   // Framework for scope chain
//    function someFunc() {
//     function inner() {
//     }
//     function inner2() {
//       function foo() {
//       }
//     }
//   }

  /// *** scope chains 

/// ** Task:02

function foo(){
    var bar

    function zip()
    {
        var quux=99
    }
   // console.log(quux) // This gives error as expected
}

foo()