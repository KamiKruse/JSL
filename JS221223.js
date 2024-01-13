//// counter using Closures /////

function createCounter()
{
    let count = 0
    return function increment()
    {
         console.log(++count);
    }
}

let firstCounter = createCounter()

firstCounter()
firstCounter()
firstCounter()
firstCounter()

let secondCounter = createCounter()

secondCounter()
secondCounter()
secondCounter()

firstCounter()
firstCounter()
