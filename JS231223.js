function sendMessage(message, fn)
{
    return(fn(message));
}


sendMessage("Hello world", function(message){
    console.log(message + "from a callback function");
});

sendMessage("Hello World", console.log); 

function add(a,b)
{
    return a+b
}
function sub(a,b)
{
    return a-b
}
function math(a,b,callback)
{
    return callback(a,b)
}

console.log(math(1,2,sub));

function each(array, fn)
{
    for(let i=0; i<array.length; i++)
    {
        fn(array[i])
    }
}

// each([1,2,3,4], function(val){
//     console.log(val*2);
// })

function map(arr, fn)
{
    let newArr = []
    for(let i=0; i<arr.length; i++)
    {
        newArr.push(fn(arr[i]))
    }
    
     console.log(newArr);
}
map([1,2,3,4], function(val){
    return val *2;
})

function countdown(val)
{
    let count = val
    let timerId = setInterval(function(){
    count--
    console.log(count);
    }, 1000)

    setTimeout(function(){
    clearTimeout(timerId)
    console.log("Done!");
    }, 3000)
}

// countdown(4)

function randomGame()
{
    let randomNumber
    let count = 0
    let timerId = setInterval(function(){
        randomNumber = Math.random()
        count++
        if(randomNumber > 0.75)
        {
            clearInterval(timerId)
            console.log(count);
            return count
        }
    }, 1000)
}

// console.log(randomGame())
// console.log(Math.random())

function isEven(val)
{
    
    return val%2 === 0 

}
function isOdd(val)
{
    
    return val%2 !== 0 

}
// console.log(isEven(8));
// console.log(isOdd(5));
function isPrime(val)
{
    // let status = []
    // let primeCounter = 0
    // let range = [1,2,3,4,5,6,7,8,9]
    // for(let i=1; i<range.length; i++)
    // {
    //     if((val > 1)&&(val%range[i] === 0))
    //     {
    //       status.push('Divisible by ' + range[i])
    //       primeCounter++ 
    //     }
    // }
    // if(primeCounter >= 1)
    // {
    //     console.log("Number not prime");
    //     return false
    // }
    // else
    // {
    //     console.log("Number prime");
    //     return true
    // }  
    if(val <= 1)
    {
        return "Number not Prime"
    }
    for(let i=2; i<=Math.sqrt(val); i++)
    {
        if(val%i === 0)
        {
            return "Not Prime"
        }
    }
    return "Prime"
}
// console.log(isPrime(5));

function numberFact(num, fn)
{
    return fn(num)
}

console.log(numberFact(5, isEven));

function find(arr, fn)
{
    for(let i=0; i<arr.length; i++)
    {
        if(fn(arr[i]))
        {
            return arr[i]
        }
    }
}
// find([8,11,4,27], function(val){return val >= 10}); // 11
// find([8,11,4,27], function(val){return val === 5}); // undefined


function findIndex(arr, fn)
{
    for(let i=0; i<arr.length; i++)
    {
        if(fn(arr[i]))
        {
            return i
        }
    }
}
// returns 1 (index of the first value greater than or equal to 10)
console.log(findIndex([8,11,4,27], function(val){return val >= 10}));
console.log(findIndex([8,11,4,27], function(val){return val === 7})); // undefined


////specialMultiply////

function specialMultiply(a,b)
{
    if(arguments.length === 1)
    {
        return function(b)
        {
            return a*b
        }
    }
    return a*b
    
}
console.log(specialMultiply(3,4));// 12
console.log(specialMultiply(3)(4)); // 12
// specialMultiply(3); // returns a function 
