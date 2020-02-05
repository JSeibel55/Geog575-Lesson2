//initialize function called when the script loads
function initialize(){
	cities();
};

//function to create a table with city objects and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//append the table element to the div
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");
	
	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");
	
	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

	//Function call to add a third column for the City Size
	addColumns(cityPop);
	//Function call to add mouse over and mouse click events
    addEvents();
};

//Function to create City Size column with a row for each city in cityPop
function addColumns(cityPop){
	
	//JQuery loop to loop through cityPop and assign a city size to each city object
    $('tr').each(function(i){

		//Default start where it generates the column title because no city object is being looked at yet
    	if (i == 0){
    		$(this).append('<th>City Size</th>');
    	} else {

			//Create a citySize variable to store the city size in
    		var citySize;

			//Look at the population attribute of the city object array and assign a city size depening on the city populaiton size
			//If the city has a population attribute less than 100000, assign a small city size
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

			//If the city has a population attribute less than 500000, assign a medium city size
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

			//Any other city size, assign a large city size
    		} else {
    			citySize = 'Large';
    		};

			//append the value stored in citySize to the current table row
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

//Function to add mouse events
function addEvents(){

	//function that reacts to when the mouse tracks over the table
	$('table').mouseover(function(){
		
		//assign a variable named color that will be added upon to get a rgb color value
		var color = "rgb(";

		//loop through 3 increments to create the full rgb color value
		for (var i=0; i<3; i++){

			//genreate a random number and add it to the color variable
			var random = Math.round(Math.random() * 255);

			color += random;

			//If the loop is still occuring, add a "," after each randomly generated number for the rgb requirments
			if (i<2){
				color += ",";
			//Once done looping, add a ")" at the end
			} else {
				color += ")";
			}
		};

		//method that sets the color of the table(this) element. Propetyname, color value
		$(this).css('color', color);
	});

	//function that pops up this alert message
	function clickme(){
		alert('Hey, you clicked me!');
	};

	//Function that allows the table to be respond to being clicked on and reacts with the clickme funciton
	$('table').on('click', clickme);
};

//Function to put data on webpage
function debugCallback(mydata){
	//Appends the data in string format to the div
	$(mydiv).append('<br>GeoJSON data: <br>' + JSON.stringify(mydata));
};

//define AJAX function
function debugAjax(){
	//define a variable to hold the data
	var mydata;

    //basic jQuery ajax method
	$.ajax("data/MegaCities.geojson", {
		dataType: "json", //Type of file
		success: function(response){ //When the file is opened correctly, pass the contents to an internal function
			mydata = response
			//Call other function to pass the data too
			debugCallback(mydata);
		}
	});
};

//call the initialize function when the document has loaded
$(document).ready(initialize);
$(document).ready(debugAjax);