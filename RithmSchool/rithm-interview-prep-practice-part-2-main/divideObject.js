function divideObject(obj) {
  let nonNumSum = 0
    let numSum = 0
    let newArr = []
    let nSum = []
    let nNSum = []
    for(let key in obj)
    {
        if(typeof obj[key] === 'number')
        {
            numSum += obj[key]
        }
        if(typeof obj[key] === 'string')
        {
            nonNumSum += obj[key].length 
        }
    }
    nSum.push(numSum)
    nNSum.push(nonNumSum)
    newArr.push(nSum, nNSum)
  return newArr
}
