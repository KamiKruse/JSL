// Array Manipulation Exercise: Using Splice (Pop), Shift, Unshift, Push based on String commands

function remEnd(arr)
{
     let element = arr.splice(arr.length -1, 1);
     
     return element;
}

// console.log(remEnd([1,2,3]))

function remBeg(arr)
{

}

// isPalindrome

//Saw the solution
function isPalindrome(str)                                
{
    let cleanedString = str.toLowerCase().replace(/[^a-z]/g, '');
    for(let i=0; i<cleanedString.length/2; i++)
    {
        if(cleanedString[i] !== cleanedString[cleanedString.length - 1 - i])
        {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('a man a plan a canal Panama'));

//Saw the solution
function isPalindrome2(str){
    let cleanedString = str.toLowerCase().replace(/[^a-z]/g, '');          // Space and Case insensitive
    return cleanedString.split('').reverse().join('') === cleanedString;
  }
  
console.log(isPalindrome2('a man a plan a canal Panama'));

