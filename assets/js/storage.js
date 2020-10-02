const storage = (todo, action) => {
	
	let todos;
	let completedTodos;
	
	if(localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}
	
	if(localStorage.getItem('completedTodos') === null) {
		completedTodos = [];
	} else {
		completedTodos = JSON.parse(localStorage.getItem('completedTodos'));
	}
	
	switch(action) {
		case 'ADD':
			todos.push(todo);	
			localStorage.setItem('todos', JSON.stringify(todos));
			break;
		case 'REMOVE':
			todos.splice(todos.indexOf(todo), 1);
			localStorage.setItem('todos', JSON.stringify(todos));
			break;
		case 'REMOVE_COMPLETE':
			completedTodos.splice(completedTodos.indexOf(todo), 1);
			localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
			break;
		case 'COMPLETE':
			completedTodos.push(todo); 
			localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
			todos.splice(todos.indexOf(todo), 1);
			localStorage.setItem('todos', JSON.stringify(todos));
			break;
		case 'UNDO':
			todos.push(todo);
			localStorage.setItem('todos', JSON.stringify(todos));
			completedTodos.splice(completedTodos.indexOf(todo), 1);
			localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
			break;
	}
		
}

const fetchStorage = () => {
	
	let todos;
	let completedTodos;
		
	if(localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}
	
	if(localStorage.getItem('completedTodos') === null) {
		completedTodos = [];
	} else {
		completedTodos = JSON.parse(localStorage.getItem('completedTodos'));
	}
		
	for(todo of todos) {
		addItem(todo);
	}
	
	for(completedTodo of completedTodos) {
		addItem(completedTodo, 'UNDO');
	}
	
}
