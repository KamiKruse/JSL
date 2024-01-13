// window.onload = function(){
//     loadTodo()
// }

// function addTodo()
// {
//         let inputElement = document.getElementById("todoitem")
//         let inputValue = inputElement.value

//         if(inputValue.trim() === '')
//         {
//             alert('Please enter a todo item')
//             return
//         }

//         let createListItem = document.createElement('li')
//         createListItem.innerText = inputValue

//         let orderedList = document.getElementById("todos")
//         orderedList.appendChild(createListItem)

//         saveTodo()

//         inputElement.value = ''
    
// }

// function saveTodo()
// {
//     let todos = JSON.parse(localStorage.getItem("todosLocal")) || []

//     let inputElement = document.getElementById("todoitem")
//     let inputValue = inputElement.value

//     todos.push(inputValue)
//     localStorage.setItem("todosLocal", JSON.stringify(todos))
// }

// function loadTodo()
// {
//     let todos = localStorage.getItem("todosLocal")
//     if(todos && typeof todos === 'string')
//     {
//         try{
//             todos = JSON.parse(todos)
//         } catch(e)
//         {
//             console.error('Error parsing todos:', e)
//             todos = []
//         }
        
//     } else {
//         todos = todos || []
//     }

//     let orderedList = document.getElementById("todos")
//     orderedList.innerHTML = ''
//     todos.forEach(function(todo) {
//         let createListItem = document.createElement('li')
//         createListItem.innerText = todo
//         orderedList.appendChild(createListItem)
//     })
// }

window.onload = function(){
    let todoForm = document.getElementById("newTodoForm");
    let todoList = document.getElementById("todoList");

    let savedTodos = JSON.parse(localStorage.getItem("todos")) || []
    for(let i=0; i<savedTodos.length; i++)
    {
        let newTodo= document.createElement("li")
        newTodo.innerText = savedTodos[i].task
        newTodo.isCompleted = savedTodos[i].isCompleted ? true : false
        if(newTodo.isCompleted)
        {
            newTodo.style.textDecoration = "line-through"
        }
        todoList.appendChild(newTodo)
    }

    todoForm.addEventListener("submit", function(event){
        event.preventDefault();

        let removeButton = document.createElement("button");
        removeButton.innerText = "X";

        let newTodo = document.createElement("li");
        newTodo.innerText = document.getElementById("task").value;
        newTodo.isCompleted = false;
        todoForm.reset();
        todoList.appendChild(newTodo);
        newTodo.appendChild(removeButton);

        savedTodos.push({task: newTodo.innerText, isCompleted: false});
        localStorage.setItem("todos", JSON.stringify(savedTodos));
    })

    todoList.addEventListener("click", function(event){
        
        if(!event.target.isCompleted)
        {
            event.target.style.textDecoration = "line-through";
            event.target.isCompleted = true;
        }
        else 
        {
            event.target.style.textDecoration = "none";
            event.target.isCompleted = false;
        }
        if(event.target.tagName.toLowerCase() === 'button')
        {
            event.target.parentNode.remove();
        }
        else
        for(let i=0; i<savedTodos.length; i++)
        {
            if(savedTodos[i].task === event.target.innerText){
                savedTodos[i].isCompleted = event.target.isCompleted;
                localStorage.setItem("todos", JSON.stringify(savedTodos));
            }
        }
    });
}
