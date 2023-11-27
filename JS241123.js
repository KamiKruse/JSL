let nestedArr = [[1,2,3],[4,5,6],[7,8],[9,10,11,12]];

// for(let i=0; i<nestedArr.length; i++)
// {
//     for(let j=0; j<nestedArr[i].length; j++)
//     {
//         console.log(nestedArr[i][j]);
//     }
// }

///// For..Of Loop -> Favour using it if index is not required
for(let row of nestedArr)
{
    for(let cell of row)
    {
        // console.log(cell);
    }
}

////Print Even nos of Nested Array
let printEvens = (function()
{
    let evenNumbers = [];
    for(let row of nestedArr)
    {
        for(let cell of row)
        {
            if(cell%2===0)
            {
                evenNumbers.push(cell)
            }
        }
    }
    return evenNumbers
})();

// console.log(printEvens)

let sumTotal = (function()
{
    let totalSum = 0;
    for(let row of nestedArr)
    {
        for(let cell of row)
        {
            totalSum += cell;
        }
    }
    return totalSum;
})();

// console.log(sumTotal)


///// My first real challenge - Rotate Array. Came really close to solving it. ChatGPT worked over my logic to constrain the new array length. Also you worked on 
///// the solution yourself and in the quest for knowing how to solve and using ChatGPT for testing your understanding, this is what it came up with even though
///// its very different from the solution of the exercise.

function rotateArray(arr, num)
{
   let nArr = [];
// nArr.length = arr.length;
   for(let i=0; i<arr.length; i++)
    {
        let newIndex = (i+num)%arr.length   /// This is where the magic happens
        nArr[newIndex] = arr[i]
        // if(i+num === arr.length)
        // {
        //     nArr[0] = arr[i]             /// My Logic
        // }
        // else{
        //     nArr[i+num]=arr[i]
        // }            
    }
   return nArr
}
console.log(rotateArray([1,2,3], 2))




//// Couldn't solve it. Completely forgot about index access for a nested array. Here the outer row index i is added to the nested j index to form a continous sequence. When you want to access an element in a nested array you do the [i][j]. Still need more practice for nested arrays
function xoGrid(rows, columns)
{
    let grid = [];
    for(let i=0; i<rows; i++)
    {
        let row = []
        for(let j=0; j<columns; j++)
        {
            if((i+j)%2 === 0)    /// This is where the magic of alternating happens
            {
                row.push('X')
            }
            else
            {
                row.push('O')
            }
        }
        grid.push(row)
    }
    return grid;
}

console.table(xoGrid(2,4))

///
// makeXOGrid(1,4) 

/*/
[["X","O","X","O"]]
/*/

// makeXOGrid(3,2) 

/*/
[["X","O"],["X","O"],["X","O"]]
/*/

// makeXOGrid(3,3) 
/*/
[["X","O","X"],["O","X","O"],["X","O","X"]]
/*/
///
