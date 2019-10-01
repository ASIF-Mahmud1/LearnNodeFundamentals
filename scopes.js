function foo(){
    var bar= 'fish'
}
//  *** bar is out of scope  of the function: foo
//console.log(bar)

function blockScope(){
    var value= 3
    if(value==3)
    {
        let withinScope= 'test'

    }

    // *** within scope throws error throws error outside the curly braces
    //console.log( "Scope is ",withinScope)


}
blockScope()
