const doneDelete = (event) => {
	
	let item;
	
	if(event.target) {
		item = event.target;
	} else {
		item = event;
	}

	if(item.classList[0] === 'delete') {
		const todo = item.parentElement;
		todo.classList.add('remove');
		
		switch(item.previousSibling.classList[0]) {
			case 'done':
				storage(todo.children[0].innerHTML, 'REMOVE');
				break;
			default:
				storage(todo.children[0].innerHTML, 'REMOVE_COMPLETE');
		}
		
		todo.addEventListener('transitionend', () => {
			todo.remove();
		})
		
	} else if(item.classList[0] === 'done') {
		item.previousSibling.classList.add('complete');
		item.classList.remove('done');
		item.classList.add('undo');
		item.firstElementChild.src = 'assets/imgs/icons8-checkmark-checked.svg';
		if(event.target) {
			storage(item.previousSibling.innerHTML, 'COMPLETE');
		}
		
	} else if(item.classList[0] === 'undo') {
		item.previousSibling.classList.remove('complete');
		item.classList.remove('undo');
		item.classList.add('done');
		item.firstElementChild.src = 'assets/imgs/icons8-checkmark.svg';
		storage(item.previousSibling.innerHTML, 'UNDO');
	}

}