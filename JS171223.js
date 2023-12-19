//Highest Priority To Do
function findHighestPriorityTodo(todos) {
    let maxPriority = 0
    let maxTodo = []
    for(let i=0; i<todos.length; i++)
    {
        if(todos[i]['priority'] > maxPriority)
        {
            maxPriority = todos[i]['priority']
            maxTodo = todos[i]
        }
    }
    return Object.values(maxTodo)
}
  let todos = [{
    task: "Eat",
    priority: 18,
  },
  {
    task: "Sleep",
    priority: 22,
  },
  {
    task: "Solve problems",
    priority: 17,
  }];
  
  console.log(findHighestPriorityTodo(todos)); // ["Sleep", 22]
  
//   let todos = [{
//     task: "Task 1",
//     priority: 1,
//   },
//   {
//     task: "Task 2",
//     priority: 2,
//   },
//   {
//     task: "Task 3",
//     priority: 3,
//   }];
  
//   console.log(findHighestPriorityTodo(todos)); // ["Task 3", 3]


//// inMatrix ///////

function inMatrix(arr, val) {
  let isThere = false
  for(let i=0; i<arr.length; i++)
  {
    for(let j=0; j<arr[i].length; j++)
    {
        if(arr[i][j] === val)
        {
            isThere = true
        }
        isThere
    }
  }
  return isThere;
 }
 let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// console.log(inMatrix(matrix, 5)); // true
// console.log(inMatrix(matrix, 8)); // true
// console.log(inMatrix(matrix, 10)); // false

//// Replace After /////
function replaceAfter(arr, val) {
  for(let i=0; i<arr.length; i++)
  {
      if(i === val)
      {
        arr[i] = "Hello"
        arr[i+1] = "World"
      }
  }
  return arr
}

// console.log(replaceAfter(["1", "2", "a", "b", "3", "4"], 2));
// ["1", "2", "Hello", "world", "3", "4"]

// console.log(replaceAfter(["a", "b", "c"], 0));
// // ["Hello", "world", "c"]


