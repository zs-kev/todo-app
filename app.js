const inputLabel = document.getElementById('inputLabel');
const userInput = document.getElementById('todoInput');
const addBtn = document.querySelector('#addButton');
const list = document.querySelector('#list');

let listItem = document.querySelectorAll('li');
let doneBtn = document.querySelectorAll('#doneBtn');
let deleteBtn = document.querySelectorAll('#deleteBtn');

function addItem(event) {

    if(userInput.value) {

        // If previous submit was invalid, reverse changes
        if(inputLabel.style.color = 'red') {
            userInput.style.border = '1px solid #76E1A0';
            inputLabel.innerHTML = 'Add Item';
            inputLabel.style.color = '#76E1A0';
        }

        // Create li
        let listContainer = document.createElement('div');
        listItem = document.createElement('li');

        listItem.innerHTML = userInput.value;
        listContainer.appendChild(listItem);
        list.appendChild(listContainer);

        // Create buttons
        doneBtn = document.createElement('button');
        deleteBtn = document.createElement('button');

        doneBtn.innerHTML = 'Done';
        doneBtn.id = 'doneBtn';
        doneBtn.classList.add('done');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.id = 'deleteBtn';
        deleteBtn.classList.add('delete');
        listContainer.appendChild(doneBtn);
        listContainer.appendChild(deleteBtn);
    
    } else {

        userInput.style.border = '1px solid red';
        inputLabel.innerHTML = 'Cannot leave field blank';
        inputLabel.style.color = 'red';

    }

    userInput.value = '';

}

function doneDelete(event) {

    const item = event.target

    if(item.classList[0] === 'delete') {
        const todo = item.parentElement;
        todo.classList.add('remove');
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
    } else if(item.classList[0] === 'done') {
        item.previousSibling.classList.add('complete');
        item.classList.remove('done');
        item.classList.add('undo');
        item.innerHTML = 'Undo';
    } else if(item.classList[0] === 'undo') {
        item.previousSibling.classList.remove('complete');
        item.classList.remove('undo');
        item.classList.add('done');
        item.innerHTML = 'Done';
    }

}

addBtn.addEventListener('click', addItem);
list.addEventListener('click', doneDelete);



