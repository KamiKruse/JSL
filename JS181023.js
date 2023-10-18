let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://www.devtopics.com/best-programming-jokes/"
};
// Write the command to add the language “Go” to the end of the languages array.
programming.languages.push("Go");
console.log(programming.languages);

// Change the difficulty to the value of 7.
programming.difficulty = 7;
console.log(programming.difficulty);

// Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;

// Write the command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
console.log(programming.isFun);

// Using a loop, iterate through the languages array and console.log all of the languages.
// 1.My way
for ( let key in programming.languages)
{
    console.log(programming.languages[key]);
}
console.log(programming)

// 2.Rithm School way
for (let i = 0; i < programming.languages.length; i++) {
    console.log(programming.languages[i]);
}

//Using a loop, console.log all of the values in the programming object.
for( let key in programming)
{
    console.log(programming[key])
}

//Using a loop, console.log all of the keys in the programming object.
for( let key in programming)
{
    console.log(key)
}

//-----------------------------------------------------------------------------//

//FUNCTIONS

function isOverPointFive(){
    if(Math.random() > .5){
        return true;
    }
    return false;
}

let overPointFive = isOverPointFive();
// console.log(overPointFive)

function myNameIs() 
{
    return "Vivek Sreekumar";
}

let myName = myNameIs();
// console.log(`My Name is, Ah, My Name is, ${myName}`)

let favoriteFoods = ["Ice Cream", "Pizza"];
// let isPizzafound = false;

function favFoodSelector()   // MY METHOD IS INCORRECT. CORRECT CODE FROM RITHM SCHOOL IS BELOW
{
    for (let i=0; i<favoriteFoods.length; i++)
    {
        let checkedNum = Math.random();   
        if (checkedNum > 0.5)
        {
            console.log(checkedNum);
            console.log("Pizza");
            return "Pizza";
        }
        console.log(checkedNum);
        console.log("Ice Cream");
        return "Ice Cream";
    }
}
//favFoodSelector();

//CORRECT CODE OF THE ABOVE FROM RITHM SCHOOL
function randomFood(){
    // lets find a random number between 0 and 1 and multiply it by the length of the array. This will give us a number between 0 and 2. If we always round down, we will get either 0 or 1, so we can use Math.floor to round down.
    let randomIndex = Math.floor(Math.random() * favoriteFoods.length);
    console.log(randomIndex);
    console.log(favoriteFoods[randomIndex]);
}

//randomFood();

let numbers = [1,2,3,4,5,6,7,8,9,10];

function displayOddNumbers ()
{
    // for(let num in numbers)
    // {
    //     if(num%2 === 0)          //TRY NOT TO USE THIS FORM OF FOR LOOP
                                    //Output is: 0, 2, 4, 6, 8
    //     {
    //         console.log (num);
    //     }
    // }
    for (let i=0; i<numbers.length; i++)
    {
        if(numbers[i]%2 === 0)
        {                                   //Output is: 2, 4, 6, 8, 10
            console.log(numbers[i]);
        }
    }
}
// displayOddNumbers();

function returnEvenNumbers()
{
    for (let i=0; i<numbers.length; i++)
    {
        if(numbers[i]%2 === 0)
        {                                   
            return numbers[i];
        }
    }
}
console.log(returnEvenNumbers()); 

function returnOddNumbers()
{
    for (let i=0; i<numbers.length; i++)
    {
        if(numbers[i]%2 !== 0)
        {                                   
            console.log (numbers[i]);
            break;
        }
    }
}
returnOddNumbers();

function returnFirstHalf()
{
    for (let i=5; i<numbers[9]; i++)
    {
                          
            console.log(numbers[i]);
            
    }
}

//returnFirstHalf()
