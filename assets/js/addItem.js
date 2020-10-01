const addItem = (event, action = 'DONE') => {

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
	checkImage.src = 'assets/imgs/icons8-checkmark.svg';
	checkImage.alt = 'Done';
	doneBtn.appendChild(checkImage);
		
	deleteBtn.id = 'deleteBtn';
	deleteBtn.classList.add('delete');
	deleteImage.src = 'assets/imgs/icons8-delete.svg';
	deleteImage.alt = 'Delete';
	deleteBtn.appendChild(deleteImage);
		
	listContainer.appendChild(doneBtn);
	listContainer.appendChild(deleteBtn);
	
	if(userInput.value) {
		storage(listItem.innerHTML, 'ADD');
	}
	
	if(action === 'UNDO') {
		doneDelete(listContainer.children[1]);
	}

	userInput.value = '';

}
