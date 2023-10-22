//Recursion

function sum(num)
{
    if (num === 1) return 1;
    return num + sum(num-1);
}

// console.log(sum(5));

function pow(base, exp)
{
    if(exp === 0) return 1;
    return base * pow(base, exp -1);
}

// console.log(pow(4,3));

function fact(num)
{
    if(num === 1) return 1;
    return num * fact(num - 1);
}
// console.log(fact(5));




// console.log((function displayFullName(fname, lname)
// {   
//     return fname + " " + lname;
// })("Test", "Bot"));





function CalcClose ( )
{
    function add (num1, num2)
    {
        return num1 + num2;
    }
    function sub (num1, num2)
    {
        return num2 - num1;
    }
    function mult (num1, num2)
    {
        return num2 * num1;
    }
    function div (num1, num2)
    {
        return num2 / num1;
    }

    return {
        addNumbers : add,
        subNumbers: sub,
        multNumbers: mult,
        divNumbers: div
    }
}

let calcFunction = CalcClose();
// console.log(calcFunction.subNumbers(2,8))

function cd10(num)
{
    if (num === 1) return 1;
    return `${num}, ` + cd10(num-1)
}

//  console.log(cd10(10));

////////////////////////////////////

// Function exercises

function diff(num1, num2)
{
    return num1 - num2;
}

// console.log(diff(0,2))


function printDay(num3)
{
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    for(let i=0; i<daysOfWeek.length; i++)
    {
        if(num3-1 === i)
        {   

            return daysOfWeek[i];
            break;
        }
    }
    return undefined;
}

// console.log(printDay(1));

function lastElement(arr)
{
    if(arr.length === 0)
    {
        return undefined;
    }
    else
    {
        let newArr = arr.splice(-1,1);
        return newArr;
    }

}

// console.log(lastElement([1,2,3,4,5]));

function numberCompare (n1, n2)
{
    if(n1 > n2) return `First number ${n1} is greater than the second number ${n2}`;
    else if ( n2 > n1) return `Second number ${n2} is greater than the first number ${n1}`;
    else return `Both numbers are equal`;

}
// console.log(numberCompare(3,3))

function singleLetterCount(word, letter)
{
    let a = letter.toLowerCase();
    let newWord = word.toLowerCase()
    for(let i=0; i<newWord.length; i++)
    {
        if(newWord[i] === a)
        {
            return 1;
        }
    }
    return 0;
}
// console.log(singleLetterCount('Amazing', 'L'));

function multipleLetterCount(str)
{
    let mlc = {};
    for(let i=0; i<str.length; i++)
    {
        console.log(mlc.str[i]);
    }

}

console.log(multipleLetterCount('hello'));
