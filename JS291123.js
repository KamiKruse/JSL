///Includes
///Understood the code from chatGPT and then wrote it with that understanding. My earlier version of the code is below this. It passed all except for {'a': 1, 'b': 2}, 1, 2 . It was taking 2 as the starting index which my code was doing.
function includes(collection, value, index=0){
    if(Array.isArray(collection) || typeof collection === 'string')
    {
         for(let i=index; i<collection.length; i++)
         {
             if(collection[i]===value)
             {
                 return true
             }
         }
    }
    else if(typeof collection === 'object')
    {
         for(let key in collection)
         {
             if(collection[key] === value)
             {
                 return true
             }
         }
    }
    return false
}
/// MY EARLIER CODE
// let itemReturn = 0
//     let objReturn = 0
//     for(let num in collection)
//     {
//         if(index && collection[index]===value)
//         {
//             itemReturn = collection[index]
//             console.log(itemReturn)
//         }
//         else if(!index && collection[num]===value)
//         {   
//             objReturn = collection[num]
//         }
//     }
//     if(itemReturn || objReturn)
//     {
//         return true
//     }
//     else
//     {
//         return false
//     }
// console.log(includes([1, 2, 3], 6))
// includes([1, 2, 3], 1) // true
// includes([1, 2, 3], 1, 2) // false
// includes([1, 2, 3], 6) // false

// includes({ 'a': 1, 'b': 2 }, 1) // true
// includes({ 'a': 1, 'b': 2 }, 'a') // false

// includes('abcd', 'b') // true
// includes('abcd', 'e') // false
// includes('abcd', 'a', 2) // false



/////IndexOf

function indexOf(arr, num){
    for(let i=0; i< arr.length; i++)
    {
        if(arr[i] === num)
        {
            return i
        }
    }
    return -1
}

// let arr = [5, 10, 15, 20];
// console.log(indexOf(arr, 20)) // 3

// let arr2 = [1, 2, 3, 4, 5];
// indexOf(arr2, 2); // 1

// let arr3 = [1, 2];
// indexOf(arr3, 10); // -1



////Last IndexOf
function lastIndexOf(arr, num){
    let lastIndex = 0;
    for(let i=0; i< arr.length; i++)
    {
        if(arr[i] === num)
        {
            lastIndex = i
        }
    }
    if(lastIndex)
    {
        return lastIndex
    }
    else
    {
        return -1
    }
}

// console.log(lastIndexOf([1, 2, 3, 4], 2)) // 1
// console.log(lastIndexOf([1, 2, 3, 4, 2], 2)) // 4
// console.log(lastIndexOf([1, 2, 3, 4], 22)) // -1

//// Max

function max(arr){
    let hold = 0;
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] > hold)
        {
            hold = arr[i]
        }
    }
    return hold
}

// console.log(max([5, 1, 4, 7, 1, 2])) // 7
// console.log(max([3, 4, 12, 1, 8])) // 12
// console.log(max([-1, 6, 3, 2.2, -10, -4])) // 6


