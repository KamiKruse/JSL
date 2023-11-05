// function bmiCalculator(weight, height)
// {
//     let bmi = weight/Math.pow(height,2);
//     if(bmi < 18.5)
//     {
//         return "Your BMI is " + Math.round(bmi) + " and you are underweight";
//     }
//     if(bmi > 18.5 && bmi < 24.9)
//     {
//         return "Your BMI is " + Math.round(bmi) + " and your weight is normal";
//     }
//     if(bmi > 24.9)
//     {
//         return "Your BMI is " + Math.round(bmi) + " and you are overweight";
//     }
// }

function bmiCalculator (weight, height) {
    let bmi = weight/Math.pow(height,2);
    let interpretation = "";
    if(bmi < 18.5)
    {
        interpretation = "Your BMI is " + Math.round(bmi) + ",so you are underweight";
    }
    if(bmi > 18.5 && bmi < 24.9)
    {
        interpretation =  "Your BMI is " + Math.round(bmi) + ",so you have a normal weight";
    }
    if(bmi > 24.9)
    {
        interpretation =  "Your BMI is " + Math.round(bmi) + ",so you are overweight";
    }
    return interpretation;
}
console.log(bmiCalculator(72, 1.69));


//Love calculator 😑

//Leap Year Calculator
function myEarlierIncorrectLeapYearCalc(year)
{
    if((year % 4 === 0)||(year % 400 === 0)&&(year % 100 === 0))
    {
        return "Is Leap"
    }
    else return "Not Leap"
}
console.log(myEarlierIncorrectLeapYearCalc(1900));

function isLeapUpdated(year)
{
 
    if((year%4 === 0 && year%100 != 0)|| (year%400 === 0))
    {
        return "is Leap"
    }
    return "Not Leap"
}

console.log(isLeapUpdated(1800))

//The infamous FizzBuzz

function fizzBuzz()
{
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    for (let i=0; i< arr.length; i++)
    {
        if((arr[i]%3 === 0)&&(arr[i]%5 === 0))
        {
            console.log("FizzBuzz");
        }
        else if (arr[i]%5 === 0)
        {
            console.log("Buzz");
        }
        else if (arr[i]%3 === 0)
        {
            console.log("Fizz");
        }
        else console.log(arr[i]);
    }
}

// fizzBuzz();

//Personal challenge - RECURSIVE FIZZBUZZ

function rFB(arr)
{
    let num = 0;
    console.log(indexOf(arr[num]))
}

// console.log(rFB([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))

//FizzBuzz Udemy
let output = [];
let n = 1; 
let i=0;
function fizzBuzzUdemy()
{
    if((n%3===0) && (n%5===0))
    {
        output.push("FizzBuzz");
    }
    else if(n%3===0)
    {
        output.push("Fizz");
    }
    else if(n%5===0)
    {
        output.push("Buzz");
    }
    else
    {
        output.push(n);
    }
    n++;
    

    console.log(output)
}

fizzBuzzUdemy();
fizzBuzzUdemy();
fizzBuzzUdemy();
fizzBuzzUdemy();
fizzBuzzUdemy();
fizzBuzzUdemy();
fizzBuzzUdemy();
fizzBuzzUdemy();
fizzBuzzUdemy();
fizzBuzzUdemy();
fizzBuzzUdemy();
fizzBuzzUdemy();
fizzBuzzUdemy();
fizzBuzzUdemy();
fizzBuzzUdemy();
fizzBuzzUdemy();
fizzBuzzUdemy();
fizzBuzzUdemy();


