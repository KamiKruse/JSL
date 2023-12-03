// add whatever parameters you deem necessary - good luck!
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
