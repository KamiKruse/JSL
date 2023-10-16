let obj = {};
let person = "Tom";

obj[person] = "This is a person";
obj[1+1+1] = "Three";

obj;

console.log(obj.Tom)

/*
obj now should look like this:
{
    Tom: "This is a person",
    3: "Three"
}
*/

// obj.3;// Syntax Error! Can't use the dot notation
// obj[3]; // "Three" - we NEED to use the bracket notation
// obj[person]; // "This is a person"
// obj["Tom"]; // "This is a person"
// obj.person; // undefined
