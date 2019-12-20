//Global Variables
var searchInput = $(".search-term").val();
var searchBtn = $("#searchBtn");
//Create an on click event for pulling information from the new york times based on year and end date

searchBtn.on("click", function(){
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchInput + "&api-key=tsxPbC2ZGwVxEdkCnj2qNALGO5f0vE0W"

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
