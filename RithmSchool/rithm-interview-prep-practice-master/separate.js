// add whatever parameters you deem necessary - good luck!
function separate(arr){
    let newArr = []
    for(let i=0; i<arr.length;i++)
    {
        if(arr[i] === 'cat')
        {
            newArr.push(arr[i])
        }
    }
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]==='water')
        {
            newArr.push(arr[i])
        }
    }
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]==='dog')
        {
            newArr.push(arr[i])
        }
    }
    return newArr
}
