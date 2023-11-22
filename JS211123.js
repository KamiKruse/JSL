let people = ["Greg", "Mary", "Devon", "James"];
newPeople = people.shift();
Matt = people.unshift("Matt");
noJames = people.pop();
myName = people.push("Vivek")
console.log(people);

const loopThroughArray = (arr) =>{
    for(let i=0; arr.length; i++ )
    {
        if(arr[i]=== "Mary")
        {
            return;
        }
        console.log(arr[i]);
    }
}

loopThroughArray(people);
let spliced = people.splice(2) 
console.log(spliced) // ['Devon', 'Vivek']
console.log(people.indexOf("Mary"))
console.log(people)
console.log(people.indexOf("Foo"))
let newConcat = [...people, ...spliced]
console.log(newConcat)
console.log(newConcat.splice(2,1,"Elizabeth", "Artie"))
console.log(newConcat)
newConcat.splice(0,1, "Greg");
console.log(newConcat.pop())
console.log(newConcat.push("James"));
console.log(newConcat)
let newBob = newConcat.concat("Bob");
console.log(newBob)

let merhJaab = {
    "first name" : "Vivek",
    "last name" : "Sreekumar",
    "occupation" : "professional time waster",
    test: "newTest"
}
console.log(merhJaab["first name"])
console.log(merhJaab.occupation)
console.log(merhJaab["last name"])
merhJaab.hobby = "Coding";
console.log(merhJaab)

let instructor = {
    name: "Matt",
    mathWizard: true,
    dogOwner: true
};

// for(let singleKey in instructor){
//     console.log(singleKey);
// }

let namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

// Output should be:
// JavaScript => elie
// jogging => matt
// table building => janey
// sailing => tim

// function loopThroughObj(obj)
// {
//     // for(let key in obj)
//     // {
//     //     console.log(obj[key] + " => " + key)
//     // }
//     if("vivek" in namesAndHobbies)
//     {
//         console.log("vivek", namesAndHobbies.vivek)
//     }
// }
namesAndHobbies.vivek = "coding";
// console.log(loopThroughObj(namesAndHobbies))

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://www.devtopics.com/best-programming-jokes/"
};
console.log(programming.languages.push("Go"))
programming.difficulty = 7;
delete programming.jokes;
programming.isFun = true;
// console.log(programming)
// for(let i=0; i<programming.languages.length; i++)
// {
//     console.log(programming.languages[i])
// }

for(let keys in programming)
{
    console.log(programming[keys])
}
