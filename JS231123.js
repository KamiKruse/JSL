let result = (function(){
    let pName = "Vivek";
    return pName;
})();
console.log(result);

let tim = (function(){
    return {
        personName : "Tim",
        personAge: 50
    }
})();

console.log(tim);
console.log(tim.personName);

let personObject = (function invokeRightAway(){
    let person = "Vivek"
    return {
        getName : function()
        {
            return person
        },
        setName: function(newName)
        {
            person = newName
            return person;
        }
    }
})();

console.log(personObject)
console.log(personObject.getName())
console.log(personObject.setName("eTest"))
console.log(personObject.getName())

function printDay(val)
{   
    switch(val)
    {
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday";
        default: return undefined;
    }
    
}
console.log(printDay(3))

function lastElement(arr)
{
    for(let i=0; i < arr.length; i++)
    {
        if(arr[i]===arr.length)
        {
            return arr[i];
        }
    }
    return undefined
}
let array = [1,2,3];
console.log(lastElement(array))

let instructorObj = {
    name: "Tim", 
    additionaldetails: {
            instructor: true,
            favoriteHobbies: ["test1", "test2", "test3"],
                moreDetails: {
                    favoriteSportsTeam: "Some sports team",
                    numberOfSiblings: 0,
                    isYoungest: true,
                    homeTown : {
                        city: "Some City",
                        State:"Some State"
                    },
                    citiesLived: ["City1", "City2", "City3"]
            }
        }
    }

let displayCities = (function dispCities(instructorObj)
{
    let cities = instructorObj.additionaldetails.moreDetails.citiesLived;
    for(let i=0; i < cities.length; i++)
    {
        console.log(cities[i]);
    }

})(instructorObj);

let displayHomeTownData = (function dispHome(instructorObj){
    let homeTown = instructorObj.additionaldetails.moreDetails.homeTown;
    for(let key in homeTown)
    {
        console.log(homeTown[key])
    }
    
})(instructorObj);

function AddDetails(key, val)
{
    let obj = instructorObj.additionaldetails.moreDetails;
    obj[key] = val;
    return obj;
}
console.log(AddDetails("isHilarious", true))

function removeDetails(keyAus)
{   
    let obj = instructorObj.additionaldetails.moreDetails;
    for(let key in obj)
    {
        if(key === keyAus)
        {
            delete obj[key];
        }
    }

    return obj;
}

console.log(removeDetails("isHilarious"))

let nestedData = {
    innerData: {
        order: ["first", "second", "third"],
        snacks: ["chips", "fruits", "crackers"], 
        numberData: {
            primeNumber: [2,3,5,7,11],
            fibonacci: [1,1,2,5,8,13]
        },
        addSnack: function(snack){
            let addingSnacks = nestedData.innerData.snacks.push(snack);
            return addingSnacks;
        }
    }
}

let loopPrime = (function LoopingPrime(nestedData){
    let innerPrime = nestedData.innerData.numberData.primeNumber;
    for(let i=0; i< innerPrime.length; i++)
    {
        console.log(innerPrime[i])
    }

})(nestedData);


let evenFib = (function evenFibonacci(nestedData){
    let innerFib = nestedData.innerData.numberData.fibonacci;
    for(let i=0; i< innerFib.length; i++)
    {
        if(innerFib[i]%2===0)
        console.log(innerFib[i])
    }

})(nestedData);

 console.log(nestedData.innerData.order[1])

console.log(nestedData.innerData.addSnack("chocolate"))
console.log(nestedData.innerData.snacks)

let nestedObject1 = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    }
  }

  function addSpeakers(fName)
  {
    let newSpeaker = {name:fName}
    nestedObject1.speakers.push(newSpeaker);
    return newSpeaker
  }

  console.log(addSpeakers("Vivek"))

///// Eloquent JavaScript Examples

let gString = `Hello,
Whats up baby!! Wanna Dance
NO!`
let someText = "A newline character is written like \"\\n\"."
console.log(someText)
/////// End of EJS

//////Back to Rithm School
function addLanguages(lName, translation)
{
    nestedObject1.data.languages[lName] = {hello : translation};
    console.log(nestedObject1.data.languages)
    

}

console.log(addLanguages("German", "Guten Tag"))

function addCountry(countryName, population, capital)
{
    let country = nestedObject1.data.continents.europe.countries;
    country[countryName] = {capital: capital, population:population}
    console.log(country)
}
addCountry("Germany", 80000000, "Berlin")
