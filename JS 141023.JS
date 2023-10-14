//ARRAY METHODS EXERCISES

let arr = [];
arr.push("Vivek");
console.log(arr);
arr.push("Sreekumar");
console.log(arr);
arr.unshift("Teal");
console.log(arr);
arr.shift("Teal");
console.log(arr);

let arr2 = [];
arr2.unshift("69");
console.log(arr2);
arr2.push("Javascript");
console.log(arr2);
console.log(arr2.indexOf("Javascript"));

let combinedArr = arr.concat(arr2);
console.log(combinedArr);

let arr3 = ["JavaScript", "Python", "Ruby", "Java"];
let newarr4 = arr3.slice(1,3)
console.log(newarr4.concat(["Haskell","Clojure"]));
console.log(arr3)
