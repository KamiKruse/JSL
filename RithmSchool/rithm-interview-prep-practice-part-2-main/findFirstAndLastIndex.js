function findFirstAndLastIndex(arr, num) {
  let newArr = []
    let indexFound = 0
    for(let i=0; i<arr.length; i++)
    {
        if((arr[i] === num))
        {
            indexFound++
            newArr.push(i)
        }
    }
    let test = []
    if(newArr.length > 2)
    {
        test.push(newArr[0], newArr[newArr.length-1])
    }
    
    if(indexFound <= 1)
    {
        return -1
    }
    else
    {
        return test
    }
}

