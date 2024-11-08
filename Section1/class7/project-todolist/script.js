let todoList = [
  { item: "Buy milk", dueDate: "11/08/2024" },
  { item: "Go to College", dueDate: "13/08/2024" },
];
displayItems();

function addTodo() {
  let inputElement = document.querySelector("#todo");
  let todoDate = document.querySelector("#todoDate");
  let todoItem = inputElement.value;
  let date = todoDate.value;
  todoList.push({item: todoItem, dueDate: date});

  inputElement.value = " ";
  todoDate.value = " ";
  displayItems();
}

function displayItems() {
  let displayElement = document.querySelector("#container");
  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    // let item= todoList[i].item;
    // let dueDate = todoList[i].dueDate;
    let {item,dueDate} = todoList[i];
    newHtml += `
    <div>
    <span>${item}</span>
    <span>${dueDate}</span>
    <button onclick="deleteTodo(${i})">Delete</button>
    </div>
    `;
  }
  displayElement.innerHTML = newHtml;
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  displayItems();
}
