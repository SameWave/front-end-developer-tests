/*
* User list sorting
*/

//create "No result" block
$("#user-list").append("<li class='no_results'>No results</li>");

/*toolbar search*/
searchInput = $("#search-input");
$(".search-toggle").on("click", function () {

	//toggle search field visibility by css and add focus on the field
	$(this).parent().toggleClass("opened");
	searchInput.focus();

	//refresh list when search field closed
	searchInput.val("");
	$(".card").addClass("visible").show();
	if (!$('.card.visible').length < 1) {
		$(".no_results").hide();
	}
});

//listen events in search field
searchInput.bind("keydown keypress keyup change", function() {

	//set main variables
	var userList = $("#user-list li"),
		keyword = this.value.toLowerCase(),
		user = userList.find(".card").removeClass("visible").hide(),
		noResults = userList.siblings(".no_results");

	//compare entered data with existing usernames and show suitable
	user.filter(function() {
		return $(this).find(".name").text().toLowerCase().indexOf(keyword) >= 0;
	}).addClass("visible").show();

	//display "No result" block when concurrences not found
	if (!user.is(":visible")) {
		noResults.show();
	} else {
		noResults.hide();
	}

});

/*toolbar edit*/
$("#edit-list").on("click", function () {
	
	//Toggle value for "Edit" button and visibility for "remove" icons
	if ($(this).val() == "Edit") {
		$(this).val("Cancel");
		$("#user-list").addClass("editable");
	}
	else {
		$(this).val("Edit");
		$("#user-list").removeClass("editable");
	}
});

//remove person from list
$(".card .remove").on("click",function () {

	//show "No result" when all displayed cards are removed
	if ($('.card.visible').length < 2) {
		$(".no_results").show();
	}

	//remove selected card
	$(this).parent().remove();
});