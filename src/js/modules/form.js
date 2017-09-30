function check(input) {
	if (input.validity) {
		if (input.validity.valid === true) {
			input.classList.remove("error");
		} else {
			input.classList.add("error");
		}
	}
	console.log(input.checkValidity());
}