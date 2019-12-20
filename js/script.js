//Global Variables
var searchInput = $("#search-input").val();
var searchBtn = $("#searchBtn");
//Create an on click event for pulling information from the new york times based on year and end date

console.log(searchInput);

searchBtn.on("click", function(){
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchInput + "&api-key=b2295df2-2444-4aa9-a872-0333546237e7"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);

        //create a div block named resultDiv
        // var resultDiv =  $("<div>");
        //create a variable for artical title
        
        //create a variable for author of article

        //

    })
});
