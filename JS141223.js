// findFirstAndLastIndex
function findFirstAndLastIndex(arr, num) {
    // add whatever parameters you deem necessary - good luck!
    let newArr = []
    let indexFound = 0
    for(let i=0; i<arr.length; i++)
    {
        if((arr[i] === num))
        {
            indexFound++
            newArr.push(i)
        }
    }
    let test = []
    if(newArr.length > 2)
    {
        test.push(newArr[0], newArr[newArr.length-1])
    }
    
    if(indexFound <= 1)
    {
        return -1
    }
    else
    {
        return test
    }

  }
//   console.log(findFirstAndLastIndex([1, 2, 3, 4, 5], 3)); // -1
//   console.log(findFirstAndLastIndex([1, 2, 2, 2, 5], 12)); // -1
//   console.log(findFirstAndLastIndex([1, 2, 2, 2, 5], 2)); // [1, 3]


//findFirstMove
function findFirstMove(moves, char) {
    let newArr = []
    for(let i=0; i<moves.length; i++)
    {
        for(let j=0; j<moves[i].length; j++)
        {
            if(moves[i][j] === char)
            {
                 newArr.push(i,j)
            }
        }
    }
    let test = []
    if(newArr.length)
    {
        test = newArr.splice(newArr.length - 2, 2)
        return newArr
    }
    else
    {
        return -1
    }
    
}
let moves = [
    ["a", "b", "c"],
    ["d", "a", "f"],
    ["g", "h", "h"],
  ];
  
  console.log(findFirstMove(moves, "a")); // [0, 0]
  console.log(findFirstMove(moves, "h")); // [2, 1]
//   console.log(findFirstMove(moves, "z"));// -1
  

 
