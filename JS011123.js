function charCounter()
{
    let charLimit = 140;
    let stringToBeCounted = prompt("Enter the string");
    alert ("The length of your string is " + stringToBeCounted.length + " and the remaining character count is " + (stringToBeCounted.length - charLimit));
}

console.log(charCounter()); 
