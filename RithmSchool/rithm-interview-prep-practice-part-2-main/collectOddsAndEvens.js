function collectOddsAndEvens(arr) {
  let obj = {}
    let even = "even"
    let odd = "odd"
    let oddCount = 0
    let evenCount = 0
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]%2 === 0)
        {
            evenCount += 1
            obj[even] = evenCount
        }
        else if(arr[i]%2 !== 0)
        {
            oddCount += 1
            obj[odd] = oddCount
        }
        
    }
    return obj
}


