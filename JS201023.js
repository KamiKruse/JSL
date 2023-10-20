let result = (function()
{ 
    let name = "Vivek";
    return name;

})();
// console.log(result);
//IIFE
let personObject = (function invokeRightAway(){
    let person = "Elie";
    return {
        getName: function(){
            return person;
        },
        setName: function(newName){
            person = newName;
        }
    };
})();

//CLOSURE

function outer(a){
    console.log(a);
    return function inner(b){
        console.log(b);
        return a + b;
    }
}

// console.log(outer(5)); // this returns the inner function

// this calls the inner function right away
console.log(outer(5)(2)) // 7

// we can store the inner function in a variable
// let laterAdd = outer(10)

// we can now call that inner function
// laterAdd(15) // 25
