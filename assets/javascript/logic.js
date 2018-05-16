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
	var tableInMain = true;
	function tableInitialize () {
		var companionTable = $("<table style='width:100%'>")
		var tableHeader= $("<tr>");
		for (var key in companions[0]) {
			var columnHeader = $("<th>");
			columnHeader.html(key)
				.appendTo(tableHeader);
		}
		tableHeader.appendTo(companionTable);
		companionTable.appendTo("#main");

	}
	tableInitialize();
});