function valTimesIndex(arr)
{
    return arr.map(function(val,index){
        return val*index;
    });
}

// console.log(valTimesIndex([1,2,3]));
// console.log(valTimesIndex([5,10,15]))

function extractKey(obj, key){
    return obj.map(function(val){
        return val[key]
    });
}

// console.log(extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name"));

// ["Elie", "Tim", "Matt"]

function filterLetters(arr, letter)
{
   return arr.filter(function(val){
        return val.toLowerCase() === letter.toLowerCase()
   }).length;
}

// console.log(filterLetters(["a","a","b","c","A"], "a"));; // 3
filterLetters(["a","a","b","c","A"], "z"); // 0
filterLetters(["a","a","b","c","A"], "B"); // 1


function filterKey(arr, key)
{
    return arr.filter(function(val){
        return val[key]
    })
}
// console.log(filterKey([{name: "Elie", isInstructor:true, isHilarious: false},{name: "Tim", isInstructor:true, isHilarious: true},{name: "Matt", isInstructor:true}], "isHilarious")
// );
// [{name: "Tim", isInstructor:true, isHilarious:true}]

function extractKeyR(arr, key)
{
    return arr.reduce(function(acc, next){
       acc.push(next[key]);
        return acc;
    },[]);
}
console.log(extractKeyR([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name"));;

// ["Elie", "Tim", "Matt"]

function filterKeyR(arr, num)
{
    return arr.reduce(function(acc, next){
        return acc[next.toLowerCase()] === num.toLowerCase()
    })
}

// console.log(filterLetters(["a","a","b","c","A"], "B"));; // 1
// console.log(filterLetters(["a","a","b","c","A"], "a"))

function addKeyAndValue(arr, key, value)
{
    return arr.reduce(function(acc, next){
       acc[key[next]] = value
        return acc
    });
}
console.log(addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true));;

/*
[
    {
        name: 'Elie',
        isInstructor: true
    },
    {
        name: 'Tim',
        isInstructor: true
    },
    {
        name: 'Elie',
        isInstructor: true
    }
]
*/

let users = [
    {
      username: 'larry',
      email: 'larry@foo.com',
      yearsExperience: 22.1,
      favoriteLanguages: ['Perl', 'Java', 'C++'],
      favoriteEditor: 'Vim',
      hobbies: ['Fishing', 'Sailing', 'Hiking'],
      hometown: {
        city: 'San Francisco',
        state: 'CA'
      }
    },
    {
      username: 'jane',
      email: 'jane@test.com',
      yearsExperience: 33.9,
      favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
      favoriteEditor: 'Emacs',
      hobbies: ['Swimming', 'Biking', 'Hiking'],
      hometown: {
        city: 'New York',
        state: 'NY'
      }
    },
    {
      username: 'sam',
      email: 'sam@test.com',
      yearsExperience: 8.2,
      favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
      favoriteEditor: 'Atom',
      hobbies: ['Golf', 'Cooking', 'Archery'],
      hometown: {
        city: 'Fargo',
        state: 'SD'
      }
    },
    {
      username: 'anne',
      email: 'anne@test.com',
      yearsExperience: 4,
      favoriteLanguages: ['C#', 'C++', 'F#'],
      favoriteEditor: 'Visual Studio Code',
      hobbies: ['Tennis', 'Biking', 'Archery'],
      hometown: {
        city: 'Albany',
        state: 'NY'
      }
    },
    {
      username: 'david',
      email: 'david@test.com',
      yearsExperience: 12.5,
      favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
      favoriteEditor: 'VS Code',
      hobbies: ['Volunteering', 'Biking', 'Coding'],
      hometown: {
        city: 'Los Angeles',
        state: 'CA'
      }
    }
  ];

  function printEmails(users){
    return users.reduce(function(acc, next){
        acc.push(next["email"])
        return acc
    },[]);
  }

  console.log(printEmails(users));

  function printHobbies(users)
  {
   let hobbies = users.map(function(val){
        return val["hobbies"]
    });
    hobbies = hobbies.reduce(function(acc, next){
        return acc.concat(next)
    },[]);
    return hobbies;
  }

  console.log(printHobbies(users));

  function findHometownByState(str)
  {
       return users.find(function(val){
          return val.hometown.state === str
        });
  }

  console.log(findHometownByState('NY'));

  function allLanguages()
  {
    let uLang = []
    users.forEach(function(val){
        let favLang = val.favoriteLanguages
        favLang.find(function(uniq){
            if(!uLang.includes(uniq))
            uLang.push(uniq)
        })
    }) 
    return uLang
  }

  console.log(allLanguages());
