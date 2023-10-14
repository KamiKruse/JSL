//ARRAY METHODS EXERCISES

// let arr = [];
// arr.push("Vivek");
// console.log(arr);
// arr.push("Sreekumar");
// console.log(arr);
// arr.unshift("Teal");
// console.log(arr);
// arr.shift("Teal");
// console.log(arr);

// let arr2 = [];
// arr2.unshift("69");
// console.log(arr2);
// arr2.push("Javascript");
// console.log(arr2);
// console.log(arr2.indexOf("Javascript"));

// let combinedArr = arr.concat(arr2);
// console.log(combinedArr);

// let arr3 = ["JavaScript", "Python", "Ruby", "Java"];
// let newarr4 = arr3.slice(1,3)
// console.log(newarr4.concat(["Haskell","Clojure"]));
// console.log(arr3)

//ITERATIONS

let people = ["Greg", "Mary", "Devon", "James"];

// for(let i=0; i<people.length; i++)
// {
//     console.log(people[i]);
// }

for (let names of people)
{
    console.log(names);
}
let removedGreg = people.slice(0,1);
console.log(removedGreg); 

let removedJames = people.pop()
console.log(removedJames)
console.log(people);
console.log(people.splice(0,0,"Matt"));
console.log(people);
console.log(people.push("Vivek Sreekumar"));
console.log(people);

for(let names of people)
{
    console.log(names);
    if (names === "Mary")
    {
        break;
    }
    
}

// for(let i =0; i< people.length; i++){
//     if(i > 1){
//         break;
//     }
//     console.log(people[i]);
// }
let noMattOrMary = people.slice(2);
console.log(noMattOrMary);
console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));
console.log(people);
let newPeople = ["Greg", "Mary", "Devon", "James"]
people = newPeople;
console.log(people);
let addingNewPeople = people.splice(2,1,"Elizabeth", "Artie");
console.log(people);
let withBob = people.concat("Bob");
console.log(withBob)

