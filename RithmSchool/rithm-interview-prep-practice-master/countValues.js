// add whatever parameters you deem necessary - good luck!
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
