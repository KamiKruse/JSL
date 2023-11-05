// Whos paying 
function whosPaying(names) {
    
        // let selection = Math.random();
        // selection *= names.length;
        // selection = Math.floor(selection);
        // return names[selection] + " is going to buy lunch today!";
        return names[Math.floor(Math.random()*names.length)] + " is going to buy lunch today!"
}

// console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]))

//99 Bottles Challenge
//99 bottles of beer on the wall, 99 bottles of beer.
//Take one down and pass it around, 98 bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.

function ninety9Bottles()
{
    let bottlesOfBeer = 99;

    while(bottlesOfBeer > 0)
    {
        console.log(bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer." )
        bottlesOfBeer--
        console.log("Take one down and pass it around, " + bottlesOfBeer + " bottles of beer on the wall.")
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall. ")
}

// console.log(ninety9Bottles())


//Fibonacci Challenge

function fibonacci(totalNumber)
{
   let newArray = [0,1];
   for(let i=1; newArray.length < totalNumber; i++)
   {
        newArray.push(newArray[i] + newArray[i-1])
   }
    
    console.log(newArray)
}

console.log(fibonacci(8));

function fibonacciEmpty(num)
{
    let newArray = [];
    for (let i=0; newArray.length < num; i++)
    {
        if(i<2)
        {
            newArray.push(i)
        }
        else{
            newArray.push(newArray[i-1] + newArray[i-2])
        }
    }
    console.log(newArray);
}
console.log(fibonacciEmpty(5))


