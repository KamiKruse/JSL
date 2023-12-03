// add whatever parameters you deem necessary - good luck!
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
