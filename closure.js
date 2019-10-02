// https://www.c-sharpcorner.com/UploadFile/f50501/working-with-closure-in-nodejs/
function foo(){
    var bar

    function zip()
    {
        bar= true
        console.log("bar is ",bar)
    }
    return zip
}

let returnFromFoo= foo()

returnFromFoo()
