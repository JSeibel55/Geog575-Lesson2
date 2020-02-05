//// Ajax Functions
//define AJAX function
function jQueryAjax(){
    //define a variable to hold the data
    var mydata;

    //basic jQuery ajax method
    $.ajax("data/MegaCities.geojson", {
        dataType: "json",
        success: function(response){
            mydata = response;

            //check the data
            console.log(mydata);
        }
    });
    //check the data
    //console.log(mydata); // *Data can not be accessed here*

    //jQuery.get() method...Example 2.5
    //$.get("data/MegaCities.geojson", callback, "json");

    //jQuery.getJSON() method...Example 2.5
    //$.getJSON("data/MegaCities.geojson", callback);
};

//define callback function
//function callback(response, status, jqXHRobject){
// function callback(response){
//     //tasks using the data go here
//     console.log(response);

//     //var mydata = response; // *Data can be accessed here*

//     //pass data to another function
//     //nextFunction(mydata);
// };

$(document).ready(jQueryAjax);

// function nextFunction(data){

//     console.log(data); //contains response data held by mydata in callback
// };



//// NATIVE JAVASCRIPT FUNCTIONS
// function jsAjax(){
//     // Step 1: Create the request 
//     var ajaxRequest = new XMLHttpRequest();

//     //Step 2: Create an event handler to send received data to a callback function
//     ajaxRequest.onreadystatechange = function(){
//         if (ajaxRequest.readyState == 4){
//             callback(ajaxRequest.response);
//         };
//     };

//     //Step 3: Open the server connection
//     ajaxRequest.open('GET', 'data/MegaCities.geojson', true);

//     //Step 4: Set the response data type
//     ajaxRequest.responseType = "json";

//     //Step 5: Send the request
//     ajaxRequest.send();
// };

// //define callback function
// function callback(response){
//     //tasks using the data go here
//     //console.log(response);
//     console.log(JSON.stringify(response));
// };

// window.onload = jsAjax();