// add whatever parameters you deem necessary - good luck!
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
