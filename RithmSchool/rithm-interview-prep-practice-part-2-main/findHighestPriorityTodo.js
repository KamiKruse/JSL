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
