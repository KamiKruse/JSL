/// Min - got a hacky incorrect code passing the Rithm School test but I had better judgment and had correctly also thought about assigning min = arr[0]. I had a feeling that my code will be wrong on account of min = 0 since if no elements satisfy the If condition, min will always return 0
function min(arr){
    // let min = 0
    // for(let i=0; i<arr.length; i++)
    // {
        
    //    if(arr[i] < arr[i+1])
    //    {
    //         min = arr[i]
    //    }
    // }
    // return min
    let min = arr[0]
    for(let i=1; i<arr.length; i++)
    {
        
       if(arr[i] < min)
       {
            min = arr[i]
       }
    }
    return min
}
// console.log(min([5, 1, 4, 7, 1, 2])) // 1
// console.log(min([-1, 6, 3, 2.2, -10, -4])) // -10
// console.log(min([3,2,1])) // -10


///////// Slice
function slice(arr, startIndex=0, endIndex){
    let newArr = []
    if(!endIndex || endIndex > arr.length)
    {
        for(let i=startIndex; i<arr.length; i++)
        {
            newArr.push(arr[i])
        }
    }
    else 
    {
        for(let i=startIndex; i<endIndex; i++)
        {
            newArr.push(arr[i])
        }
    }

    return newArr 
}
// console.log(slice([1, 2, 3, 4, 5], 0, 2)) // [1, 2]
// console.log(slice([1, 2, 3, 4, 5], 2, 4)) // [3, 4]
// console.log(slice([1, 2, 3, 4, 5], 2))//[3, 4, 5]
// console.log(slice([1, 2, 3, 4, 5], 2, 10)) [3, 4, 5]


//////// Count Values
function countValues(arr, num){
    let count = 0;
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] === num)
        {
            count += 1
        }
    }
    return count
}
// console.log(countValues([4,1,4,2,3,4,4], 4)) // 4
// console.log(countValues([4,1,4,2,3,4,4], 100)) // 0
// console.log(countValues([], 1)) // 0


////Keys  -- Code similar to Object.keys()
function keys(obj){
    let keyArr = []
    for(let keys in obj)
    {
        keyArr.push(keys)
    }
    return keyArr
}
// let obj = { a: 1, b: 2, c: 3 };
// console.log(keys(obj)) // ["a", "b", "c"]
// let obj2 = { first: 'Matt', last: 'Lane' };
// console.log(keys(obj2)) // ["first", "last"]
// let obj3 = {};
// console.log(keys(obj3)) // []


/////Values  -- Code similar to Object.values()
function values(obj){
    let newArray = []
    for(let keys in obj)
    {
        newArray.push(obj[keys])
    }
    return newArray
}


////SquareEvenNumbers
function squareEvenNumbers(arr){
    let sum = 0
    let square = 0
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]%2 === 0)
        {
            square = arr[i] * arr[i]
            sum += square
        }
    }
    return sum
}
// console.log(squareEvenNumbers([1, 2, 3, 4, 5])) // 20
// console.log(squareEvenNumbers([1, 3, 5, 7])) // 0
// console.log(squareEvenNumbers([5, 6, 7])) // 36


////Entries   -- Code similar to Object.entries()
function entries(obj){
    let kvArr = []
    let subArr = []
    for(let key in obj)
    {
        subArr = [key,obj[key]]         /// By fluke I tried this assignment
        kvArr.push(subArr)
    }
    return kvArr
}
// let obj = { a: 1, b: 2, c: 3 };
// console.log(entries(obj))
// [["a",1], ["b",2], ["c",3]]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// console.log(entries(obj2))
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
// let obj3 = {};
// console.log(entries(obj3)) // []


////Multiples
function multiples(x, n){
    let newArr = []
    for(let i=1; i<=n; i++)
    {
            newArr.push(x * i)
    }
    return newArr
}
// console.log(multiples(3, 4)) // [3, 6, 9, 12]
// console.log(multiples(2, 5)) // [2, 4, 6, 8, 10]



///Pluck
function pluck(arr, keyName){
    let newArr = []
    for(let i=0; i<arr.length; i++)
    {
        if(keyName in arr[i])
        {
            newArr.push(arr[i][keyName])
        }
        else
        {
            newArr.push(undefined)
        }
    }
    return newArr
}
// console.log(pluck([
// { name: "Tim" }, { name: "Matt" }, { name: "Elie" }],
// 'name'
// ))
// ["Tim", "Matt", "Elie"]
// console.log(pluck(
// [{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],
// 'isBoatOwner'
// ))
// [true, false, undefined]


////twoHighest -- sort() method
function twoHighest(arr){
    let newArr = []
    let testArr = []
    let max = 0
    let index = 0
    for(let i=0; i<arr.length; i++)
    {
        max = Math.max(...arr)
        index = arr.indexOf(max)
        if(newArr.length < 2)
        {
            newArr.unshift(arr.splice(index, 1))
        }
        
    }
    for(let i=0; i<newArr.length; i++)
    {
        for(let j=0; j<newArr[i].length; j++)
        {
            testArr.push(newArr[i][j])
        }
    }
    return testArr
}
// console.log(twoHighest([1, 2, 10, 8])) // [8, 10]
console.log(twoHighest([6, 1, 9, 10, 4])) // [9,10]
// console.log(twoHighest([4, 25, 3, 20, 19, 5])) // [20,25]
// console.log(twoHighest([1, 2, 2])) // [2, 2];
