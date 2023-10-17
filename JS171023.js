let personalObj = {
    firstname: "Vivek",
    secondName: "Sreekumar",
    Occupation: "Unknown"
}
console.log(personalObj.firstname);
console.log(personalObj["secondName"]);
console.log(personalObj.Occupation);

let hobby = "Hobby";
personalObj[hobby] = "Coding";
console.log(personalObj);

delete personalObj.Occupation;
console.log(personalObj);

for(let singleKey in personalObj)
{
    console.log(personalObj[singleKey]);
}

let favNum = "Favorite Number";
personalObj[favNum] = 33;

if("Favorite babe" in personalObj)
{
    console.log("The favorite number exists");
}
else
{
    console.log("Your favorite babe does not exist");
}

let namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

// for(let allKey in namesAndHobbies)
// {
//     console.log(namesAndHobbies[allKey] + " => " + allKey);
// }

// let newName =  "Vivek";
// namesAndHobbies[newName]= "Coding"

namesAndHobbies.Vivek = "Coding";

for(let allKey in namesAndHobbies)
{
    // console.log(namesAndHobbies[allKey] + " => " + allKey);
    console.log(`${namesAndHobbies[allKey]} => ${allKey}`)
}

if("Vivek" in namesAndHobbies)
{
    console.log(namesAndHobbies.Vivek);
}
