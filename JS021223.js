////StringFromObjects
function stringFromObject(obj){
    let newString = []
    let newArr = Object.entries(obj)
    for(let i=0; i<newArr.length; i++)
    {
        newString.push(newArr[i].join(' = '))
        
    }
    let evenMoreNewString = newString.join(", ")
    return evenMoreNewString
  }
//   console.log(stringFromObject({ a: 1, b: '2' }))
  // "a = 1, b = 2"
//   console.log(stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false }))
  // // "name = Elie, job = Instructor, isCatOwner = false"
//   console.log(stringFromObject({})) // ""
  

////Count Numbers
function countNumbers(arr){
    let count = 0;
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] == Number(arr[i]) && (arr[i] !== '') && (arr[i] !== ' '))
        {
            count += 1
        }
    }
    return count
}
// console.log(countNumbers(['a','b','3','awesome','4'])) // 2
// console.log(countNumbers(['32', '55', 'awesome', 'test', '100'])) // 3
// console.log(countNumbers([])) // 0
// console.log(countNumbers(['4','1','0','NaN']))// 3
// console.log(countNumbers(['7', '12', 'a', '', '6', '8', ' '])) // 4


///Remove Vowels
function removeVowels(str){
    let newStr = [...str]
    for(let i=0; i<newStr.length; i++)
    {
        if((newStr[i] == 'a') || (newStr[i] == 'e') || (newStr[i] == 'i') || (newStr[i] == 'o') || (newStr[i] == 'u') || (newStr[i] == 'A') || (newStr[i] == 'E') || (newStr[i] == 'I') || (newStr[i] == 'O') || (newStr[i] == 'U') )
        {
            delete newStr[i]
        }
    }
    console.log(newStr.join(''))
}
// console.log(removeVowels("Hello!")); // "Hll!"
// console.log(removeVowels("Tomatoes")); // "Tmts"
// console.log(removeVowels("Reverse Vowels In The String")); // "Rvrs Vwls n Th Strng"
// console.log(removeVowels("aeiou")); // ""
// console.log(removeVowels("why try, shy fly?")) // "why try, shy fly?"


////Find The Duplicate
function findTheDuplicate(arr){
    let count = 0
    let found
    for(let i=0; i<arr.length; i++)
    {
        for(let j=i+1; j<arr.length; j++)
        {
            if(arr[i] === arr[j])
            {
                count += 1
                found = arr[i]
            }
        }
     
    }
    return found;
}
// console.log(findTheDuplicate([1,2,1,4,3,12])); // 1
// console.log(findTheDuplicate([6,1,9,5,3,4,9])); // 9
// console.log(findTheDuplicate([2,1,3,4])); // undefined

////Total Caps
function totalCaps(arr){
    let count = 0;
    for(let i=0; i<arr.length; i++)
    {
        for(let j=0; j<arr[i].length; j++)
        {
            const charAt = arr[i][j].charCodeAt()
            if(charAt > 64 && charAt < 91)
            {
                count += 1
            }
        }
    }
    return count
}
// console.log(totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"])) // 8
// console.log(totalCaps(["Elie", "Matt", "Tim"])) // 3
// console.log(totalCaps(["hello", "world"])) // 0


/// Separate Cats and Dogs with Water
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
// console.log(separate(['dog','cat','water'])); // ['cat','water','dog']
// console.log(separate(['dog','cat','water','cat'])); // ['cat', 'cat', 'water', 'dog'])
// console.log(separate(['cat','cat','water','dog','water','cat','water','dog']));
// ['cat','cat','cat','water','water','water','dog','dog']
// console.log(separate(['cat','cat','cat','cat','cat',
//     'cat','cat','cat','cat','cat','cat',
//     'cat','cat','cat','cat','cat','cat','cat',
//     'dog','water','water','water','water','water',
//     'water','water','water','water','water','water',
//     'water','water','water']));
//  /* ['cat','cat','cat','cat','cat',
//     'cat','cat','cat','cat','cat','cat',
//     'cat','cat','cat','cat','cat','cat','cat',
//     'water','water','water','water','water',
//     'water','water','water','water','water','water',
//     'water','water','water', 'dog']
// */

function isAlt(str){
    let alt = false
    for(let i=1; i< str.length-1; i++)
    {
        if(((str[i-1]=== 'a') && (str[i+1]=== 'a')) || (((str[i-1] === 'e') && (str[i+1]=== 'e'))) || (((str[i-1]=== 'i') && (str[i+1]) === 'i')) || ((str[i-1]=== 'o') && ((str[i+1]) === 'o')) || (((str[i-1]=== 'u') && (str[i+1]) === 'u')))
        {
            alt = true
        }
        // console.log(str[i-1], str[i+1]);
        
        
    }
    return true
}
// console.log(isAlt("amazon")); // true
// console.log(isAlt("apple")); // false
// console.log(isAlt("banana")); // true
