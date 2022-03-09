// ------------------------------------Declarators-------------------------------------------------------//
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// ----------------------------Event Listeners----------------------------------------------------------//
  document.addEventListener('DOMContentLoaded', getTodos);
  todoButton.addEventListener('click', addTodo);
  todoList.addEventListener('click', deleteCheck);
  filterOption.addEventListener('click', filterTodo);

// -----------------------------------Main function----------------------------------------------------//
function addTodo(event){
  
    // prevent from submitting
    event.preventDefault();


    if (todoInput.value==="")
    {
        alert("please enter something");
    }
    else{
    CreateElement(todoInput.value);
    //add todo to local storage
    saveLocalTodos(todoInput.value);
    }

    
    //clear todo input value;

    todoInput.value = "";
}
// ----------------------------------------------------Create Elements ----------------------------------------------------------------- //

function CreateElement(input){
      // Todo DIV 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // create li 
    const newTodo = document.createElement('li');
    newTodo.innerText = input;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"> </i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"> </i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append to List
    todoList.appendChild(todoDiv);
}
// -----------------------------------------------------Delete Function ----------------------------------------------------------------- //
function deleteCheck(e){
    const item = e.target;
    //delete to do
    if(item.classList[0]=== "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
        
    }

    //check mark 
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
// -------------------------------------------------------Filter functionality ----------------------------------------------------------- //
function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display ="flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display ="none";

                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display ="none";

                }
                break;
        }
    })
}
// -------------------------------------------------------Saves To Local Storage ------------------------------------------------------------------- //
function saveLocalTodos(todo){
    //check if todos exist
    let todos;
    if(localStorage.getItem('todos')=== null){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos))
}
// -------------------------------------------------------Gets Data from Database ------------------------------------------------------------------ //
function getTodos(){

    let todos;
    if(localStorage.getItem('todos' ) === null){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(function(todo){
        CreateElement(todo);
    })
}
// ---------------------------------------------------Removes Data from Local storage ------------------------------------------------------------- //
function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos' )=== null){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1)
    localStorage.setItem('todos', JSON.stringify(todos));

}