const inputLabel = document.querySelector('#inputLabel'),
	  userInput = document.querySelector('#todoInput'),
	  addBtn = document.querySelector('#addButton'),
	  list = document.querySelector('#list');

const checkInput = (event) => {
    if(userInput.value) {
        if(inputLabel.style.color = 'red') {
            userInput.style.border = '1px solid #76E1A0';
            inputLabel.innerHTML = 'Add Item';
            inputLabel.style.color = '#76E1A0';
            addItem(event);
        } 
    } else {
        userInput.style.border = '1px solid red';
        inputLabel.innerHTML = 'Cannot leave field blank';
        inputLabel.style.color = 'red';
    }
} 

const addItem = (event) => {

    let listContainer = document.createElement('div'),
		checkImage = document.createElement('img'),
		deleteImage = document.createElement('img'),
        listItem = document.createElement('li'),
        doneBtn = document.createElement('button'),
        deleteBtn = document.createElement('button');
    
    if(userInput.value) {
        listItem.innerHTML = userInput.value;
    } else {
        listItem.innerHTML = event;
    }
    
    listContainer.appendChild(listItem);
    list.appendChild(listContainer);

    doneBtn.id = 'doneBtn';
    doneBtn.classList.add('done');
	checkImage.src = 'icons8-checkmark.svg';
	checkImage.alt = 'Done';
	doneBtn.appendChild(checkImage);
		
    deleteBtn.id = 'deleteBtn';
    deleteBtn.classList.add('delete');
	deleteImage.src = 'icons8-delete.svg';
	deleteImage.alt = 'Delete';
	deleteBtn.appendChild(deleteImage);
		
    listContainer.appendChild(doneBtn);
    listContainer.appendChild(deleteBtn);
    
    if(userInput.value) {
        storage(listItem.innerHTML);
    }

    userInput.value = '';

}

const doneDelete = (event) => {

    const item = event.target

    if(item.classList[0] === 'delete') {
        const todo = item.parentElement;
        todo.classList.add('remove');
        deleteStorage(todo.children[0].innerHTML);
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
		
    } else if(item.classList[0] === 'done') {
        item.previousSibling.classList.add('complete');
        item.classList.remove('done');
        item.classList.add('undo');
		item.firstElementChild.src = 'icons8-checkmark-checked.svg';
        console.log(item.previousSibling.innerHTML);
		
    } else if(item.classList[0] === 'undo') {
        item.previousSibling.classList.remove('complete');
        item.classList.remove('undo');
        item.classList.add('done');
        item.firstElementChild.src = 'icons8-checkmark.svg';
    }

}

const storage = (todo) => {
	
	let todos;
	
	if(localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}
		
	todos.push(todo);
	
	localStorage.setItem('todos', JSON.stringify(todos));
	
}

const fetchStorage = (todo) => {
    
    let todos;
        
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
        
    for(todo of todos) {
        addItem(todo);
    }
    
}

const deleteStorage = (todo) => {
    
    let todos;
        
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    
    todos.splice(todos.indexOf(todo), 1);
    
    localStorage.setItem('todos', JSON.stringify(todos));
    
}

//const checkItemStorage = (todo) => {
//    
//    let todos;
//        
//    if(localStorage.getItem('todos') === null) {
//        todos = [];
//    } else {
//        todos = JSON.parse(localStorage.getItem('todos'));
//    }
//    
//    todos.splice(todos.indexOf(todo), 1);
//    
//    localStorage.setItem('todos', JSON.stringify(todos));
//    
//}

addBtn.addEventListener('click', checkInput);
list.addEventListener('click', doneDelete);
fetchStorage();