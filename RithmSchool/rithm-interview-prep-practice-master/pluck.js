// add whatever parameters you deem necessary - good luck!
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
