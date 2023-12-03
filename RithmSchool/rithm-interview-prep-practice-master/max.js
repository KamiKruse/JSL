// add whatever parameters you deem necessary - good luck!
function max(arr){
    let hold = 0;
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] > hold)
        {
            hold = arr[i]
        }
    }
    return hold
}
