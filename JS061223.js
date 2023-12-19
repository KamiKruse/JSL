/// Divide Object. The question framing was incorrect. Understood what the question asked and accordingly solved it
function divideObject(obj){
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
console.log(divideObject({
    first: "hi",
    second: "hello",
    third: "hey",
    fourth: 2,
    fifth: "fun",
    sixth: 10,
  }))
  // [ [12], [13] ]   -- First subarray = total of non number characters of all strings, second subarray = total of all characters of all strings 
