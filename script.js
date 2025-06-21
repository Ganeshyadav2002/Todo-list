const input = document.querySelector(".input-box");
const button = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");


button.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);

function addTodo(event){
   event.preventDefault();
   
   const todoDiv = document.createElement("div")
   todoDiv.classList.add("todo-container")

   const todoItem = document.createElement("li")
   todoItem.classList.add("todo-item")
   todoItem.innerText = input.value;
   todoDiv.appendChild(todoItem);

   const deletButton = document.createElement("button")
   deletButton.classList.add("delete-btn")
   deletButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
   todoDiv.appendChild(deletButton);

   const completeButton = document.createElement("button")
   completeButton.classList.add("complete-btn")
   completeButton.innerHTML= `<i class="fa-solid fa-circle-check"></i>`;
   todoDiv.appendChild(completeButton);

   todoList.appendChild(todoDiv);
   input.value = "";
}

function deleteTodo(event){
 
   const item = event.target;
   if(item.classList[0] === "delete-btn"){
     const delItem = item.parentElement;
     delItem.remove();      
   }
   if(item.classList[0] === "complete-btn"){
     const delItem = item.parentElement;
     delItem.classList.toggle("completed"); 
   }
}