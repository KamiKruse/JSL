// add whatever parameters you deem necessary - good luck!
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
