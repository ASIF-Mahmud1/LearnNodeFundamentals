/* What is promise? 
A promise is an object that defines a method called
then. The promise object represents a value that may be available some time
*/
function printMessageAfterSomeTime(){   /// TIMED out will be shown after 0.3 sec
    setTimeout(function(){ console.log("TIMED OUT!"); }, 300);

}
printMessageAfterSomeTime()
