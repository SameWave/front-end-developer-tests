function check(input) {
	if (input.validity) {
		if (input.validity.valid === true) {
			input.parentElement.classList.remove("error");
		} else {
			input.parentElement.classList.add("error");
		}
	}
	console.log(input.checkValidity());
}