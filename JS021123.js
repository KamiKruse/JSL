function weeks(age)
{
    let remainingAge = 90 - age;
    let days = 365;
    let weeks = 52;
    let months = 12;
    let totalAgeInDays = remainingAge * days;
    let totalAgeinWeeks = remainingAge * weeks;
    let totalAgeinMonths = remainingAge * months;
    return 'You have ' + totalAgeInDays +  ' days, '+ totalAgeinWeeks + ' weeks, and '+ totalAgeinMonths + ' months left.';
}

console.log(weeks(51));


