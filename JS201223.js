let instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};

function displayCities()
{
    let cities = instructorData.additionalData.moreDetails.citiesLivedIn
    for(let i=0; i<cities.length; i++)
    {
        console.log(cities[i]);
    }
}
function displayHomeTown()
{
    let ht = instructorData.additionalData.moreDetails.hometown
    for(let key in ht)
    {
        console.log(ht[key]);
    }
}
function addDetails(key, val)
{
    instructorData.additionalData.moreDetails[key] = val
}
function removeDetail(key)
{   
    let md = instructorData.additionalData.moreDetails
    delete md[key]
    return md
}
// addDetails("isHilarious", true)
// addDetails("previousApartments", ["Mission", "North Beach", "Nob Hill"])
// console.log(removeDetail("isHilarious"));
// console.log(instructorData.additionalData.moreDetails);
// displayHomeTown()
// displayCities()


let nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          return this;
      }
    }
}

let pm = nestedData.innerData.numberData.primeNumbers
for(let i=0; i<pm.length; i++)
{
    console.log(pm[i])
}

let fn = nestedData.innerData.numberData.fibonnaci
for(let i=0; i<fn.length; i++)
{
    if(fn[i]%2 === 0)
    {
        console.log(fn[i])
    }
    
}

// let or = nestedData.innerData.order[1]
// console.log(or);

// nestedData.innerData.addSnack("chocolate")
// console.log(nestedData);

let nestedObject = {
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

  function addSpeaker(key, val)
  {
    let valadd = {[key]:val}
    return nestedObject.speakers.push(valadd)
  }
  function addLanguage(langName, helloInLangName)
  {
    let lang = nestedObject.data.languages
    lang[langName] = {"hello": helloInLangName }
  }
  function addCountry(country, capital, pop)
  {
    let count = nestedObject.data.continents.europe.countries
    count[country] = {"capital": capital, "population": pop }
  }

  addLanguage("German", "Guten Tag")
  addCountry("Germany", "Berlin", 80000000)
  console.log(nestedObject);
 addSpeaker("test", "Vivek")
 console.log(nestedObject.speakers);

//  let nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]];
 
//  for(let i=0; i<nestedArr.length; i++)
//  {
//     for( let j=0; j<nestedArr[i].length; j++)
//     {
//         if(nestedArr[i][j] % 2 === 0)
//         {
//             console.log(nestedArr[i][j]);
//         }
//     }
//  }

let arr = [];
Array.isArray(arr); // true
Array.isArray("Hello"); // false

let nestedArr = [
  "Elie",
  ["Matt", ["Tim"]],
  ["Colt", ["Whiskey", ["Janey"], "Tom"]],
  "Lorien"
];
console.log(nestedArr.toString())
function countVowels()
{
    let count = 0
    let str = ""
    let nStr = ""
    let totalStr = ""
    // for(let i=0; i<nestedArr.length; i++)
    // {
    //   if(Array.isArray(nestedArr[i]))
    //   {
    //     str += nestedArr[i].toString()
    //   }
    //   else
    //   {
    //     nStr += nestedArr[i]
    //   }
    // }
    totalStr = nestedArr.toString()

   for(let i=0; i<totalStr.length; i++)
   {
      if(totalStr[i] === 'E' || totalStr[i] === 'e' || totalStr[i] === 'A' || totalStr[i] === 'a' || totalStr[i] === 'I' || totalStr[i] === "i" || totalStr[i] === "o" || totalStr[i] === "O" || totalStr[i] === "U" || totalStr[i] === "u")
      {
        count++
      }
   }
    return count
}
console.log(countVowels()) // 14


  // if(totalStr[i] === 'E' || totalStr[i] === 'e' || totalStr[i] === 'A' || totalStr[i] === 'a' || totalStr[i] === 'I' || totalStr[i] === "i" || totalStr[i] === "o" || totalStr[i] === "O" || totalStr[i] === "U" || totalStr[i] === "u")
  // {
  //   count++
  // }

  //// Rotate array ///// failed to solve it though understood the method upon re-examining it
  function rotate(arr, moves)
  {
    let nArr = []
    for(let i=0; i<arr.length; i++)
    {
      nArr[i] =arr[(i%3)]
      
    }
    return nArr
  }

  console.log(rotate([1,2,3], 1)); //[3,1,2]



  //// Higher-Order Functions ///


  // function each(numbers, callback){
  //   let result
  //   for(let num of numbers)
  //   {
  //      result = callback(num)
  //   }
  //   return result
  // }
  // each([1,2,3,4], function(val)
  // {
  //   console.log(val*2);
  // });

// 1
// 2
// 3
// 4

function map(arr, callback)
{
  let newArr = []
  for(let i=0; i<arr.length; i++)
  {
    newArr.push(callback(arr[i]))
  }
  console.log(newArr);
}

map([1,2,3,4], function(val)
{
  return val*2
})

function reject(arr, callback)
{
  let nArr = []
  for(let i=0; i<arr.length; i++)
  {
    if(!callback(arr[i]))
    {
      nArr.push(arr[i])
    }
  }
  console.log(nArr);
}
reject([1,2,3,4], function(val){
  return val > 2;
}); // [1,2]

reject([2,3,4,5], function(val){
  return val % 2 === 0;
}); // [3,5]
