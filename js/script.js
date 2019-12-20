//Global Variables
var searchTerm = $(".search-term");
var searchBtn = $("#searchBtn");
//Create an on click event for pulling information from the new york times based on year and end date

searchBtn.on("click", function () {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=b2295df2-2444-4aa9-a872-0333546237e7"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

    })
});

$('#clear').click(function (clear) {
    $("#results").empty();
    console.log(clear)
});