$("#currentDay").text(moment().format('LLLL'));


//Global Variables
var searchBtn = $("#searchBtn");
//Create an on click event for pulling information from the new york times based on year and end date
searchBtn.on("click", function () {
    var searchInput = $("#search-term").val();
    console.log(searchInput);
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchInput + "&api-key=tsxPbC2ZGwVxEdkCnj2qNALGO5f0vE0W";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var title = response.response.docs[0].headline.main;
        console.log(title);
        var author = response.response.docs[0].byline.original;
        console.log(author);

    });
});











    //create a div block named resultDiv
    // var resultDiv =  $("<div>");
    //create a variable for artical title

    //create a variable for author of article


})
});

$('#clear').click(function (clear) {
    $("#results").empty();
    console.log(clear)
});
