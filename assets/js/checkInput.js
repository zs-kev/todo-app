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