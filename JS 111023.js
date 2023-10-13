//Array work
let favouriteFoods = ["chicken", "brocolli", "rice"];
console.log (favouriteFoods[1]);
favouriteFoods.splice(2,1,"biryani");
console.log(favouriteFoods);
let newJunkFood = favouriteFoods.shift();
console.log(newJunkFood)
favouriteFoods.push("Whey Protein");
console.log(favouriteFoods);
favouriteFoods.unshift("Burger");
console.log(favouriteFoods);

let newEmptyArray = [];
newEmptyArray.pop();
console.log(newEmptyArray);

let firstArray = [2,3,4,5];
firstArray.splice(1,1);
console.log(firstArray);

let secondArray = ["alpha", "gamma", "delta"];
//Insert elements by making the second argument 0, which indicates to not remove any elements
secondArray.splice(1,0,"beta"); 
console.log(secondArray);

let thirdArray = [10,-10,-5,-3,2,1]; // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
thirdArray.splice(1,3,9,8,7,6,5,4,3);
console.log(thirdArray);

