let todoList = JSON.parse(localStorage.getItem('todos'))||[];

displayItems();

function addTodo(){
  let inputElement = document.querySelector('#todoInput');
  let dateElement = document.querySelector('#todoDate');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  if (todoItem.trim()==='') return;
  console.log(todoItem);
  todoList.push({item : todoItem, dueDate : todoDate});
  localStorage.setItem('todos', JSON.stringify(todoList));
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}


function displayItems(){
  let containerElement = document.querySelector('.todo-contaier');

  let newHtml = '';




  for(let i = 0; i < todoList.length; i++){
    //  let item = todoList[i].item;
    //  let dueDate= todoList[i].dueDate; OR 
    // Object destructuring 
     let {item,dueDate} = todoList[i];
     if(!dueDate){
      dueDate = 'No date provided';
     }
    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class="btn-delete" onclick="
      deleteTodo(${i});
      ">Delete</button>
    `  }
   containerElement.innerHTML = newHtml;
}

function deleteTodo (index){
  todoList.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todoList));
  displayItems();
}