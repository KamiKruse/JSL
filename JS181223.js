//// Reverse Values /////
function reverseValues(arr) {
    let newArr = []
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]%2 !== 0)
        {
           newArr.push(arr[i])
        }
        else if(arr[i]%2 === 0)
        {
            i += 2
        }
    }
    return newArr.reverse()
  }
  
//   console.log(reverseValues([1, 1, 3, 3, 2])); // [3, 3, 1, 1]
//   console.log(reverseValues([1, 3, 5, 7])); // [7, 5, 3, 1]
//   console.log(reverseValues([1, 3, 4, 7])); // [3, 1]
//   console.log(reverseValues([11, 13, 15, 20, 1, 1])); // [15, 13, 11]
//   console.log(reverseValues([4, 5, 1, 1, 2, 1, 1])); // [1]
//   console.log(reverseValues([2, 2, 2])); // []


//// robotInstructions ////
function robotInstructions(arr) {
    let obj = {}
    let countU = 0
    let countD = 0
    let countL = 0
    let countR = 0
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] === "U")
        {
            countU++
            obj[arr[i]] = countU
        }
        if(arr[i] === "D")
        {
            countD++
            obj[arr[i]] = countD
        }
        if(arr[i] === "L")
        {
            countL++
            obj[arr[i]] = countL
        }
        if(arr[i] === "R")
        {
            countR++
            obj[arr[i]] = countR
        }
             
        
    }
    return obj
}

// console.log(robotInstructions(["U", "D", "L", "R"]));
// { "U": 1, "D": 1, "L": 1, "R": 1 })

// console.log(robotInstructions(
//   ["U", "D", "L", "R", "U", "D", "L", "R", "U", "D", "L", "R"]
// ));
// // { "U": 3, "D": 3, "L": 3, "R": 3 })


