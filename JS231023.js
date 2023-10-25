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

function isPalindrome(str)
{
    let pali=[];
    for(let i=0; i < str.length; i++)
    {
        // console.log(str[i])
        for(let j=str.length -1 ; j>i; j--)
        {
            // console.log(str[j]);
            pali.push(str[j])
            console.log(pali)
        }
    }
    // if( pali.toString === str)
    // {
    //     return true;
    // }
    // else{
    //     return false;
    // }
    // console.log(pali)
    // return pali;
}

console.log(isPalindrome("hannah"));
