// add whatever parameters you deem necessary - good luck!
function findTheDuplicate(arr){
    let count = 0;
    let found 
    for(let i=0; i<arr.length; i++)
    {
        for(let j=i+1; j<arr.length; j++)
        {
            if(arr[i] === arr[j])
            {
                count += 1
                found = arr[i]
            }
        }
     
    }
    return found;
}
