let arr = [4,3,2,1]
let newArr = []
arr.forEach(function(val)
{
    newArr.push(val*2)
})
// console.log(newArr);

function printFirstAndLast(arr)
{
    let str = ''
  arr.forEach(function(val){
    console.log(val[0] + val[val.length-1]);
  })
  
}
// console.log(printFirstAndLast(['awesome', 'example', 'of', 'forEach']));


function addKeyAndValue(arr,key,value){
    let newArr = []
    arr.forEach(function(val){
        val[key] = value
        newArr.push(val)
    })
    return newArr
}

console.log(addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true));

/*
[
    {
        name: 'Elie',
        isInstructor: true
    },
    {
        name: 'Tim',
        isInstructor: true
    },
    {
        name: 'Elie',
        isInstructor: true
    }
]
*/

