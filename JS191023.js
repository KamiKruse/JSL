function add(num1, num2)
{
    return num1+num2;
}
function subtract(num1, num2)
{
    if(num2 > num1)
    {
        return num2-num1;
    }

    return num1-num2;
    
}
function multiply(num1, num2)
{
    return num1*num2;
}
function divide(num1, num2)
{
    if(num2 > num1)
    {
        return num2/num1;
    }

    return num1/num2;
    
}

// console.log(add(2,2));
// console.log(subtract(2,2));
// console.log(multiply(2,2));
// console.log(divide(2,2));

function sayHello(textParam)
{
    if(textParam === 'Vivek')
    {
        return "Hello Boss";
    }
    return `Hello ${textParam}`;

}

// console.log(sayHello("Vivek"))

function average(numArr)
{
    let sum = 0;
    for(let i=0; i<numArr.length; i++)
    {
        sum += numArr[i];
    }
    return sum/numArr.length;
}

// console.log(average([10,20]));

function createStudent(textParam1, textParam2)
{
    let studentDeets = {};
    studentDeets.firstName = textParam1;
    studentDeets.lastName = textParam2;
    return studentDeets;
}
// console.log(createStudent("Vivek", "Sreekumar"))

let vivek = createStudent("Vivek", "Sreekumar");
let littleTimmy = createStudent("Little", "Timmy");
let nobleK = createStudent("Noble", "Knight");
let students = [vivek, littleTimmy, nobleK];
function findStudentsByFirstName(textParam3)
{ 
    let isNameFound = false;
    for(let i=0; i<students.length; i++)
    {
        if (students[i].firstName.toLowerCase() === textParam3.toLowerCase())
        {
            // console.log(students[i].firstName.toLowerCase(), textParam3.toLowerCase() )
            isNameFound = true;
            break;
        } 
        else {
            isNameFound = false;
        }    
    }
    return isNameFound;
}
console.log(findStudentsByFirstName("Noble")); 

function extractEveryThird(someArr)
{
    let extract = [];
   
    for (let i=1; i < someArr.length+1; i++)
    {
       if(i%3===0)
       {
        extract.push(someArr[i-1]);
       }
    }
     return extract;
}

// console.log(extractEveryThird([1,2,3]));

function countEvensAndOdds(newArr)
{
    let evenOdd = {};
    evenOdd.evenCount = 0;
    evenOdd.OddCount = 0;
    for (let i=0; i < newArr.length; i++)
    {
        if(newArr[i]%2 === 0)
        {
            evenOdd.evenCount += 1;
        }
        else
        {
            evenOdd.OddCount += 1;
        }
    }
    return evenOdd;
}

console.log(countEvensAndOdds([1,2,3,4,5,6,7])); 

let mylet = "Hello from global";

function scopePractice() {
   let mylet = "Hello from function scope";
   return mylet;
}

// console.log(scopePractice());
// console.log(mylet);

let tricky = "Hello from global";

function trickyScopePractice() {
    tricky = "Hello from function scope";
}

console.log(tricky);

function onlyCapitalLetters(arr)
{
    let extract = [];
    for (let i =0; i < arr.length; i++)
    {
        if (arr[i]===arr[i].toUpperCase())
        {
            extract.push(arr[i]);
        }
    }
    return extract.join('');
}
console.log(onlyCapitalLetters("VIV"))
