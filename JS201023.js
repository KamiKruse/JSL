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
// console.log(outer(5)(2)) // 7

// we can store the inner function in a variable
// let laterAdd = outer(10)

// we can now call that inner function
// laterAdd(15) // 25

function defineAge(){
    let age = 28;
    return function growUp(){
        age += 1; // increment the age by 1
        return age;
    }
}

let ageOnce = defineAge();
// console.log(ageOnce());
ageOnce(); // 29
ageOnce(); // 30

let instructorModuleRefactored = (function createInstructors(){
    let instructors = ["Elie", "Matt", "Tim"];
    function displayAllInstructors(){
        return instructors;
    }
    function addNewInstructor(instructor){
        instructors.push(instructor);
        return instructors;
    }
    function removeInstructor()
    {
        return instructors.slice(0,3);
    }
    return {
        showInstructors: displayAllInstructors,
        addInstructor: addNewInstructor,
        removeInstructor : removeInstructor
    }
})();
console.log(instructorModuleRefactored.addInstructor("Test"));
console.log(instructorModuleRefactored.showInstructors())
console.log(instructorModuleRefactored.removeInstructor())




