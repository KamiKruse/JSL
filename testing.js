//// refactor the below to use Replace
function replaceWith(str, ch1, ch2)
{
    let newStr = ''
    for(let i=0; i<str.length; i++)
    {
        if(str[i]===ch1)
        {
            newStr += ch2
        }
        else
        {
            newStr += str[i]
        }
    }
    return newStr
}

// console.log(replaceWith("Foo", "F", "B"));
////refactor the below with Reduce later
function expand(arr, num)
{   
    let nArr = []
    for(let i=0; i<num; i++)
    {
        nArr.push(arr)
    }
    return [].concat(...nArr);
}
// console.log(expand([1,2,3], 3));

////refactor the below with filter
function acceptNumbersOnly(args)
{
    for(let i=0; i<arguments.length; i++)
    {
        if(typeof arguments[i] !== "number" || isNaN(arguments[i]))
        {
            return false
        }
    }
    return true
}
// console.log(acceptNumbersOnly(1,2,3,4,5,6,NaN));


function mergeArrays(arr1, arr2)
{
    let nArr = arr1.concat(arr2)
    let temp = 0
    for(let i=0; i<nArr.length; i++)
    {   
    
        for(let j=0; j<nArr.length-i-1; j++)
        {
            if(nArr[j] > nArr[j+1])
            {
                temp = nArr[j]
                nArr[j] = nArr[j+1]
                nArr[j+1] = temp
            }
        }
    }
    return nArr

}
// console.log(mergeArrays([2,1],[4,3]));

var obj1= {
    name: "Foo",
    num: 33
}
var obj2 = {
    test: "thing",
    num: 55
}

function mergeObjects(obj1, obj2)
{
    let nObj = {}
    for(let key in obj1)
    {
       nObj[key] = obj1[key]
    }
    for(let key in obj2)
    {
       nObj[key] = obj2[key]
    }
    // Object.assign(nObj, obj1, obj2)
    return nObj
}
// console.log(mergeObjects(obj1, obj2));

let matt = {
    name: "Mathew",
    sayHi: function(){
        return "Hi " + this.name;
    },
    addNum: function(a,b,c,d){
        return this.name + " calculated " + (a+b+c+d);
    }
}

let vivek = {
    name: "Vivek"
}
// console.log(matt.sayHi());
// console.log(matt.sayHi.call(vivek));
// console.log(matt.addNum.apply(vivek,[1,2,3,4]));
// console.log(matt.addNum.call(vivek,1,2,3,4));
// console.log(matt.addNum.bind(vivek, 1,3,4,5)());
// let vivekCal = matt.addNum.bind(vivek, 1,3)
// console.log(vivekCal);
// console.log(vivekCal(4,5));

function Dog(name, age)
{
    this.name = name
    this.age = age
    this.bark = function(){
        console.log(this.name + " just barked");
    }
}
let rusty = new Dog('Rusty', 3)

// console.log(rusty.bark());

var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function(){
            return "This person's name is " + obj.fullName
        }
    }
}
// console.log(obj.person.sayHi());
// let bHi = obj.person.sayHi.bind(obj)
// console.log(bHi());

function add(a,b)
{
    return a+b
}
function invokeMax(fn, max)
{
    let count = max
    return function (a,b){
        if(count === 0)
        {
            return "Maxed Out"
        }
        else
        {   
            --count
            return fn(a,b)
        }
    }
}

// console.log(invokeMax(add,3));
var addOnlyThreeTimes = invokeMax(add,3);
// console.log(addOnlyThreeTimes(1,2));
// console.log(addOnlyThreeTimes(2,2));
// console.log(addOnlyThreeTimes(1,2));
// console.log(addOnlyThreeTimes(1,2));

// function guessingGame(amount)
// {
//     let answer = Math.floor(Math.random()*10)
//     let attempts = 0
//     return function(guess)
//     {
//         // if(guess === answer)
//         // {
//         //     return "You got it"
//         //      attempts = amount
//         // }
//         // else if(guess > answer)
//         // {
//         //     ++attempts
//         //    return "You're too high!"
            
//         // }
//         // else if(guess < answer)
//         // {
//         //     ++attempts
//         //    return "You're too low "
//         // }
//         // if(attempts === amount)
//         // {
//         //     return "No more guesses, the answer was " + answer
//         // }
//         // else if(attempts > amount)
//         // {
//         //     return "You are all done playing!";
//         // }
//         if(attempts >= amount) {
//             if(attempts === amount) {
//                 attempts++;
//                 return "No more guesses. The answer was " + answer;
//             } else {
//                 return "You are all done playing!";
//             }
//         }
//         attempts++;
//         if(guess === answer) {
//             return "You got it!";
//         } else if(guess > answer) {
//             return "You're too high!";
//         } else if(guess < answer) {
//             return "You're too low!";
//         }
//     }

    
// }
function guessingGame(amount) {
    let answer = Math.floor(Math.random() * 11);
    let guesses = 0;

    return function(guess) {
        if (guesses >= amount) {
            return "You are all done playing!";
        } else {
            guesses++;
            if (guess === answer) {
                return "You got it!";
            } else if (guess > answer) {
                return "You're too high!";
            } else if (guess < answer) {
                return "You're too low!";
            }
        }
    }.bind(this);
}

let game = guessingGame(5);
// console.log(game(1));
// console.log(game(8));

function arrayFrom()
{
    return [].slice.call(arguments)
}

function sample(){
    var arr = arrayFrom(arguments)
    if(!arr.reduce) throw "This is not an array!"
    return arr.reduce(function(acc,next){
        return acc+next;
    },0)
}
// console.log(arrayFrom(1,2,3,4));
// console.log(sample());

function sumEvenArguments()
{
    return [].slice.call(arguments).reduce(function(acc, next){
        if(next%2 === 0)
        {
            return acc + next
        }
        return acc
    },0);
}

// console.log(sumEvenArguments(1,2,3,4)); // 6
sumEvenArguments(1,2,6) // 8
sumEvenArguments(1,2) // 2

function Person(firstName, lastName, favoriteColor, favoriteNumber){
    this.testName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.multiplyFavNum = function(num)
    {
        return this.favoriteNumber * num
    }
}

let vVek = new Person("Vivek", "Sreekumar", "Teal", "3")
console.log(vVek);

console.log(vVek.multiplyFavNum(3));

function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
    // this.firstName = firstName;
    // this.lastName = lastName;
    // this.favoriteColor = favoriteColor;
    // this.favoriteFood = favoriteFood;
    Parent.call(this, firstName, lastName, favoriteColor, favoriteFood)
}

let kinder = new Child("Googoo", "gaagaa", "aggaaa", "ugggiiiii")

console.log(kinder);

function Automobile(make, model, year) {
    this.make = make;
    this.model = model;
    if (year !== undefined) {
        this.year = year;
    }
    this.year = year
}

var newCar = new Automobile("Ferrari", "488 Spider");
console.log(newCar);

function Vehicles(make, model, year)
{
    this.make = make;
    this.model = model;
    if (year !== undefined) {
        this.year = year;
    }
    this.isRunning = false;
}

let lFa = new Vehicles("Lexus", "LFA", "2012")
let m3 = new Vehicles("BMW", "M3CS", "2023")

Vehicles.prototype.turnOn = function(){
    this.isRunning = true;
    return this.model + " Engines started"
}
Vehicles.prototype.turnOff = function(){
    this.isRunning = false;
    return this.model + " Engines Off"
}
Vehicles.prototype.honk = function(){
    if(this.isRunning)
    {
        return this.model + " HOOONK";
    }
    else
    {
        return "Please start the " + this.model + " to honk"
    }
}
// console.log(lFa.turnOn());
// console.log(lFa.honk());
// console.log(lFa.turnOff());
// console.log(lFa.honk());
Vehicles.prototype.year = 2016;
let probe = new Automobile("Ford", "Probe", 1993);
// console.log(probe.hasOwnProperty("year"));
// console.log(probe.__proto__);
// console.dir(probe.__proto__.__proto__);

function Parent(firstName, lastName)
{
    this.firstName = firstName;
    this.lastName = lastName;
}

Parent.prototype.sayHi = function(){
    return this.firstName + " " + this.lastName + " says hi!"
}

function Child(firstName, lastName)
{
    Parent.apply(this, arguments);
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

