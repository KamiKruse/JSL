//// scheduleCheck ////// 
function scheduleCheck(obj1, obj2) {
    let s1Count = 0
    let s2Count = 0
    for(let key in obj1)
    {
      if(obj1[key] === true)
      {
        s1Count++
      }
        
    }
    for(let key in obj2)
    {
      if(obj2[key] === true)
      {
        s2Count++
      }
    }
    if(s2Count <= s1Count)
    {
        return s2Count
    }
    else
    {
        return s1Count
    }
}
// let schedule1 = {
//     Monday: true,
//     Tuesday: true,
//     Wednesday: true,
//     Thursday: true,
//     Friday: true,
//     Saturday: true,
//     Sunday: true,
//   };
//   let schedule2 = {
//     Monday: true,
//     Tuesday: true,
//     Wednesday: true,
//     Thursday: true,
//     Friday: true,
//     Saturday: true,
//     Sunday: true,
//   };
  
//   console.log(scheduleCheck(schedule1, schedule2)); // 7;
  
//   let schedule1 = {
//     Monday: true,
//     Tuesday: true,
//     Wednesday: true,
//     Thursday: true,
//     Friday: true,
//     Saturday: true,
//     Sunday: true,
//   };
//   let schedule2 = {
//     Monday: true,
//     Tuesday: true,
//     Wednesday: true,
//     Thursday: true,
//     Friday: true,
//     Saturday: false,
//     Sunday: true,
//   };
  
//   console.log(scheduleCheck(schedule1, schedule2)); // 6;


///// Separate Languages ////
function separateLanguages(arr) {
    let obj = {"python": '', "javascript": '', "other": ''}
    let pyCount = 0
    let jsCount = 0
    let otherCount = 0
    let otherArr = []
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] === "python")
        {
            pyCount++
        }
        else if(arr[i] === "javascript")
        {
            jsCount++
        }
        else
        {
            otherCount++
            otherArr.push(arr[i])
        }
    }
    obj.python = pyCount
    obj.javascript = jsCount
    obj.other = otherArr
    return obj
}

// console.log(separateLanguages(["python", "python", "python", "javascript", "c++"]));
// /*
// {
//   python: 3,
//   javascript: 1,
//   other: ["c++"],
// }
// */
// console.log(separateLanguages(["python", "python", "spanish", "javascript"]));
// /*
//   python: 2,
//   javascript: 1,
//   other: ["spanish"],
// }
// */
// console.log(separateLanguages(["greek", "french", "yoruba", "python"]));
// /*
// {
//   python: 1,
//   javascript: 0,
//   other: ["greek", "french", "yoruba"],
// }
// */


///// skipVowels //////
function skipVowels(str) {
    let arr = []
    for(let i=0; i<str.length; i++)
    {
        if((str[i] == 'a') || (str[i] == 'e') || (str[i] == 'i') || (str[i] == 'o') || (str[i] == 'u'))
        {
            i++
        }
        else
        {
            arr.push(str[i])
        }
    }
    return arr
}

console.log(skipVowels("hello")); // ["h", "l"]
console.log(skipVowels("much fun")); // ["m", "h", " ", "f"]
console.log(skipVowels("aaaa")); // []


function displayEvenNumbers(){
    let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 2 === 0){
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
console.log(displayEvenNumbers())

  

