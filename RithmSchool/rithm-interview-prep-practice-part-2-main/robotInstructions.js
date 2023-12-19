function robotInstructions(arr) {
    let obj = {}
    let countU = 0
    let countD = 0
    let countL = 0
    let countR = 0
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] === "U")
        {
            countU++
            obj[arr[i]] = countU
        }
        if(arr[i] === "D")
        {
            countD++
            obj[arr[i]] = countD
        }
        if(arr[i] === "L")
        {
            countL++
            obj[arr[i]] = countL
        }
        if(arr[i] === "R")
        {
            countR++
            obj[arr[i]] = countR
        }
             
        
    }
    return obj
}
