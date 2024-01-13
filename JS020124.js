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

function hasFavoriteEditor(str)
{
//    for(let i=0; i<users.length; i++)
//    {
//         if(users[i].favoriteEditor === str)
//         {
//             return true
//         }
//    }
//    return false
    let nArr = []
    users.forEach(function(val){
        nArr.push(val.favoriteEditor)
    })
    return nArr.some(function(val){
        return val === str
    })
}

console.log(hasFavoriteEditor('VS Code')); // true
console.log(hasFavoriteEditor('Eclipse'));; // false

function findByUsername(str)
{
    return users.find(function(val){
        if (val.username === str)
        {
            return val
        }
    })
}

console.log(findByUsername('david'));;

function vowelCount(str)
{
//     let obj = {}
    
//    for(let i=0; i<=str.length; i++)
//    {
//         if((str[i] === 'a') || (str[i] === 'e') || (str[i] === 'i') || (str[i] === 'o') || (str[i] === 'u'))
//         {
//             if(obj[str[i]])
//             {
//                 obj[str[i]]++
//             }
//             else
//             {
//                 obj[str[i]] = 1
//             }
//         }
//    }
    
//    return obj
    let vowels = ['a','e','i','o','u'];
   return [...str].reduce(function(acc, next){
        if(vowels.includes(next))
        {
            acc[next] = (acc[next] || 0) + 1
        }
        return acc
    }, {})
}

console.log(vowelCount('incredible'));;
// {i:2, e: 2}
console.log(vowelCount('awesome'));;
// {a:1, e:2, o:1}

function removeVowels(str)
{
    let vowels = ['a','e','i','o','u'];
    return [...str].reduce(function(acc, next){
        if(!vowels.includes(next))
        {
            acc.push(next)
        }
        return acc
    }, [])
}

console.log(removeVowels('amazing')); // ["m","z","n","g"]
console.log(removeVowels('fun')); // ["f","n"]
console.log(removeVowels('silly')); // ["s","l","l","y"]
