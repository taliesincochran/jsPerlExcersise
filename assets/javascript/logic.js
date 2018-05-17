$(document).ready(function() {
	var companions = [ 
		{ 
			first_name : 'Rose',
	      	last_name  : 'Tyler',
	        home       : 'Earth' },
	    { 
	    	first_name : 'Zoe',
	        last_name  : 'Heriot',
	        home       : 'Space Station W3'
	    },
	    { 
	    	first_name : 'Jo',
	        last_name  : 'Grant',
	        home       : 'Earth'
	    },
	    { 
	    	first_name : 'Leela',
	        last_name  : null,
	        home       : 'Unspecified'
	    },
	    { 
	    	first_name : 'Romana',
	        last_name  : null,
	        home       : 'Gallifrey'},
	    { 
	    	first_name : 'Clara',
	        last_name  : 'Oswald',
	        home       : 'Earth'
	    },
	    { 
	    	first_name : 'Adric',
	        last_name  : null,
	        home       : 'Alzarius'
	    },
	    { 
	    	first_name : 'Susan',
	        last_name  : 'Foreman',
	        home       : 'Gallifrey'
	    } 
	];
	//This function initializes the table on the DOM element refered to in the parameter
	function tableInitialize (element) {
		var companionTable = $("<table style='width:100%'>");
		var tableHeader= $("<tr>");
		var firstName = $("<th>")
		firstName.text("First Name").addClass('tableColumnHeader').appendTo(tableHeader);
		var lastName = $("<th>");
		lastName.text("Last Name").addClass('tableColumnHeader').appendTo(tableHeader);
		var home = $("<th>")
		home.text("Home").addClass('tableColumnHeader').appendTo(tableHeader);
		tableHeader.appendTo(companionTable);
		companions.forEach(function(companion) {
			var first_name = companion.first_name;
			var last_name = companion.last_name;
			var home = companion.home;
			var tableRow = $("<tr>");
			var firstNameCell = $("<td>");
			firstNameCell.text(companion.first_name).addClass('tableCell').appendTo(tableRow);
			var lastNameCell =$("<td>");
			lastNameCell.text(companion.last_name).addClass('tableCell').appendTo(tableRow);
			var home = $("<td>");
			home.text(companion.home).addClass('tableCell').appendTo(tableRow);
			tableRow.appendTo(companionTable);
		})
		companionTable.appendTo(element);

	}
	//This click handler moves the table to the upper area
	$("#btnMain").on("click", function() {
		$("#sectionTableArea").empty();
		$("#btnSection").removeClass("invisible");
		$("#btnMain").addClass("invisible");
		tableInitialize("#mainTableArea")
	});
	//This click handler moves the table to the lower area
	$("#btnSection").on("click", function() {
		console.log("section button clicked")
		$("#mainTableArea").empty();
		$("#btnSection").addClass("invisible");
		$("#btnMain").removeClass("invisible");
		tableInitialize("#sectionTableArea");
	});
	//Sets the initial placement of the table to the upper area
	tableInitialize("#mainTableArea");
});