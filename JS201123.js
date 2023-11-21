function rangeNum(sNum, eNum)
{
    if(eNum === sNum)
    {
        return [sNum];
    }
    else
    {
        const newArray = rangeNum(sNum, eNum-1)
        newArray.push(eNum);
        return newArray;
    }
}

console.log(rangeNum(1,5))


const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }
console.log(sum(1,2,3))

function copyArr(refArr)
{
    let arr2 = [];
    for(let i=0; i<refArr.length; i++)
    {
        arr2.push(refArr[i]);
    }
    return arr2;
}

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// console.log(copyArr(arr1));

let arr3 = [...arr1];
console.log(arr3)

const [a, b,,,c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

function removeFirstTwo(list) {
    const[a,b, ...arr] = list;
    return arr;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);

  console.log(sourceWithoutFirstTwo)


  const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  const half = ({max, min}) => {
    return (max + min) / 2.0;
    // console.log(half);
  }
  // Only change code above this line
half(stats)
console.log(half(stats));

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for(let i=0; i< arr.length; i++)
    {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
  console.log(failuresList)
