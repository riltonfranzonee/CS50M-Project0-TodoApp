const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')


let items = 0;

function updateCount(){
  itemCountSpan.textContent = items
}

let checkedBoxes = 0

function updateUnchecked(){
  uncheckedCountSpan.textContent =  checkedBoxes
}

function newTodo() {
  let newTodo = prompt('Add a new todo');

  items++;
  checkedBoxes++;
  updateCount()
  updateUnchecked()

  const listBox = document.createElement('li')
  listBox.className = classNames.TODO_ITEM

  const checkBox = document.createElement('input');
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = classNames.TODO_CHECKBOX;
  checkBox.onchange = function(){
    this.checked ? checkedBoxes-- : checkedBoxes++;
    updateUnchecked()
  }
  
  const listTodo = document.createTextNode(newTodo)
  listTodo.className = classNames.TODO_TEXT;

  const deleteTodo = document.createElement('button');
  deleteTodo.className = classNames.TODO_DELETE;
  deleteTodo.textContent = 'DELETE';

  deleteTodo.onclick = function(){
    this.parentNode.parentElement.removeChild(listBox)
    items--;
    updateCount()

    if(!this.parentNode.children[0].checked){checkedBoxes--};
    updateUnchecked()
  };

  listBox.appendChild(checkBox)
  listBox.appendChild(listTodo)
  listBox.appendChild(deleteTodo)
  list.appendChild(listBox)  

}


