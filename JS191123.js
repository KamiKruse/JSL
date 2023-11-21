
function whileTesting()
{
    let myArray = [];
    let i=0
    
    while(i <= 5)
    {
        myArray.unshift(i)
        i++
    }

    console.log(myArray)

}
whileTesting()
// console.log(whileTesting())


function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for(let i=0; i<arr.length; i++)
    {
      for(let j=0; j<arr[i].length; j++)
      {
        product *= arr[i][j];
      }
    }
    // Only change code above this line
    return product;
  }
  console.log(  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


//   function recursionTesting(arr, n)
//   {
//     if(n === 0)
//     {
//         return arr[0];
//     }
//     if(n < 0){

//         return 1;
//     }

//     return recursionTesting(arr, n-1) * arr[n];
//   }

//   console.log(recursionTesting([2,3,4,5], 4));

function recursionTesting(arr, n) {
    if (n < 0) {
        return 1;
      } 
    
    return recursionTesting(arr, n - 1) * arr[n];
  }
  
  console.log(recursionTesting([2, 3, 4, 5], 3));
  

  function rsum(arr, n) {
    // Only change code below this line
    if(n <= 0)
    {
      return 0;
    }
    return rsum(arr, n-1)+ arr[n-1];
    // Only change code above this line
  }

  console.log(rsum([2, 3, 4, 5], 4))


  const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(names, prop) {

    for(let i=0; i<contacts.length; i++)
    {
        if(names === contacts[i].firstName)
        {
            if(contacts[i].hasOwnProperty(prop))
            {
                return contacts[i][prop]
            }  
            return "No such property"  
        }
    }
    return "No such contact"
  }
 
console.log(lookUpProfile("bob", "bitches"));


function randomRange(myMin,myMax) {
    let range = myMax - myMin + 1;
    console.log(Math.floor(Math.random() * range) + myMin)
  }

console.log(randomRange(5,9))
