const userInput = document.getElementById('todoInput');
const addBtn = document.querySelector('#addButton');
const list = document.querySelector('#list');

let listItem = document.createElement('li');

function addItem(event) {

    // Create li
    let listContainer = document.createElement('div');

    listItem.innerHTML = userInput.value;
    listContainer.appendChild(listItem);
    list.appendChild(listContainer);

    // Create buttons
    let doneBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');

    doneBtn.innerHTML = 'Done';
    doneBtn.id = 'doneBtn';
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.id = 'deleteBtn';
    listContainer.appendChild(doneBtn);
    listContainer.appendChild(deleteBtn);

}

function doneDelete(event) {

    console.log(listItem);

}

// Event Listeners
addBtn.addEventListener('click', addItem);
list.addEventListener('click', doneDelete);



