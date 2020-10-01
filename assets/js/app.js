const inputLabel = document.querySelector('#inputLabel'),
	  userInput = document.querySelector('#todoInput'),
	  addBtn = document.querySelector('#addButton'),
	  list = document.querySelector('#list');

addBtn.addEventListener('click', checkInput);
list.addEventListener('click', doneDelete);

fetchStorage();