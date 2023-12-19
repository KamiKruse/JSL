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
//   console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]))
// { odd: 5, even: 4, });
//   console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
//   // { odd: 5, even: 5, });
//   console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))
//   // { odd: 6, even: 5,}); 
//   console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))
//   // { odd: 6, even: 6 }); 
//   console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]))
//   // { odd: 7, even: 6 });
//   console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]))
//   // { odd: 7, even: 7 });
//   console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]))
//   // { odd: 8, even: 7 });
//   console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]))
//   // { odd: 8, even: 8 }); 
  

/// Count If Has Value
function countIfHasValue(obj, num) {
    let count = '' 
    let seen = {}
    let result = ''
    for(let key in obj)
    {
        for(let i=0; i<obj[key].length; i++)
        {
            if(obj[key][i] === num)
            {
                // console.log(obj[key][i])
                count += key
            }
        }
    }
    for(let i=0; i<count.length; i++)
    {
        let char = count[i]
        if(!seen[char])
        {
            result += char
            seen[char] = true
        }
        
    }

    return result.length
  }

  let obj = {
    a: [1, 10, 3],
    b: [4, 1, 7],
    c: [7, 7, 7],
    d: [10, 7, 12]
  };
//   console.log(countIfHasValue(obj, 1)); // 2
//   console.log(countIfHasValue(obj, 7)); // 3
//   console.log(countIfHasValue(obj, 10)); // 2
//   console.log(countIfHasValue(obj, 13)); // 0


/////Count Valid Numbers in String
function countValidNumsInString(str){
    let count = 0;
    for(let i=0; i<str.length; i++)
    {
        if(parseInt(str[i]))
        {
            count++
        }
    }
 return count   
}

// console.log(countValidNumsInString("")); // 0
// console.log(countValidNumsInString("1")); // 1
// console.log(countValidNumsInString("12")); // 2
// console.log(countValidNumsInString("12abc3")); // 3
// console.log(countValidNumsInString("1s2d3dsadas4")); // 4
// console.log(countValidNumsInString("512,3,4!?!")); // 5
// console.log(countValidNumsInString("123456")); // 6

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
