//Palindrome retest

function isPalindrome(str)
{
    for(let i=0; i < str.length; i++)
    {
        if(str[i].toLowerCase() !==str[str.length-1-i].toLowerCase())
        {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('tacocat'));

function RPS()
{
    let input = getUserInput();
    let options = ["Rock", "Paper", "Scissors"];
    options = options.map(string => string.toLowerCase().replace(/\s/g, ''))
    input = input.toLowerCase().replace(/\s/g, '');
    let optionChoice = Math.floor(Math.random(options) * options.length);
    console.log(options[optionChoice]);
    console.log(input);
    if((options[optionChoice] === 'scissors') && input === 'rock')
    {
        alert("You win")
    }
    else if((options[optionChoice] === 'rock') && input === 'scissors')
    {
        alert("You lose")
    }
    if((options[optionChoice] === 'paper') && input === 'rock')
    {
        alert("You lose")
    }
    else if((options[optionChoice] === 'rock') && input === 'paper')
    {
        alert("You win")
    }
    else if((options[optionChoice] === 'scissors') && input === 'paper')
    {
        alert("You lose")
    }
    else if ((options[optionChoice] === 'paper') && input === 'scissors')
    {
        alert("You win")
    }
    if((options[optionChoice] === 'rock') && input === 'rock')
    {
        alert("Draw");
    }
    if((options[optionChoice] === 'paper') && input === 'paper')
    {
        alert("Draw");
    }
    if((options[optionChoice] === 'scissors') && input === 'scissors')
    {
        alert("Draw");
    }

}

function getUserInput()
{
    let specificString = ["Rock", "Paper", "Scissors"];
    let userInput = prompt("Please enter your input:")
    userInput = userInput.toLowerCase().replace(/\s/g, '');
    specificString = specificString.map(string => string.toLowerCase().replace(/\s/g, ''));
    
        if(specificString.includes(userInput))
        {
            alert("Your input is accepted")
            return userInput;

        }
        else
        {
            alert("Yourt input is not accepted")
        }
}
console.log(RPS());
