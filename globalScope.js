//  *** Global Scope

// http://dolszewski.com/javascript/javascript-runtime-environment/
// https://developer.mozilla.org/en-US/docs/Glossary/Global_object
// https://www.javatpoint.com/nodejs-global-objects
console.log(__dirname);   // this is one of the global object
console.log(__filename);  // another example of global object
/*
Node.js global objects are global in nature and available in all modules.
 You don't need to include these objects in your application; rather they can be used directly. 
 These objects are modules, functions, strings and object etc. Some of these objects 
 aren't actually in the global scope but in the module scope.

*/

// what is global scope?
foo=5 // this variable is assigned without scopes
// console.log(global)          // It shows all the functions and objects that are available in node.js
console.log(global.foo)      // this will be assigned as global scope
let time= 9
console.log(global.time) 
//  *** Global Scope

// *** Shadowing
function shadowOuter() {
    var foo = 1;
    function shadowInner() {
       var foo = 2;
       console.log('foo ',foo)
    }
    shadowInner()
 }
shadowOuter()
// *** Shadowing

//** Task to Be Done: shadow varaible **/