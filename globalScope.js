//** Task to Be Done: shadow varaible **/

function foo(){
   quux=10  // uncomment this line, you will find it in the global object !

   function zip()
   {
        quux=99  // this variable dont show up in the global variable
   }
 //  console.log(quux)
}
foo()
console.log("global object \n", global)

//** Task to Be Done: shadow varaible **/
