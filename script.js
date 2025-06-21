const input = document.querySelector(".input-box");
const button = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");


button.addEventListener("click", addTodo);


function addTodo(event){
   event.preventDefault();
   
   const todoDiv = document.createElement("div")
   todoDiv.classList.add("todo-container")

   const todoItem = document.createElement("li")
   todoDiv.classList.add("todo-container")

   const deletButton = document.createElement("button")
   todoDiv.classList.add("todo-container")

   const complete1button = document.createElement("button")
   todoDiv.classList.add("todo-container")
}