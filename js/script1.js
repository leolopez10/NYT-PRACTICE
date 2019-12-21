$("#currentDay").text(moment().format('LLLL'));

$('#clear').click(function (clear) {
    $("#results").empty();
    console.log(clear)
});


var searchBtn = $("#searchBtn");

searchBtn.on("click", function () {

    $("#results").empty();
    console.log(clear)

    var searchInput = $("#search-term").val();
    var numRecords = $("#num-records").val();
    var startYear = $("#start-year").val();
    var endYear = $("#end-year").val();


    // Query link with searchInput + startYear + endYear 
    if (startYear === "") {
        startYear = "1699";
    };
    if (endYear === "") {
        endYear = "2020";
    };

    var apiKey = "tsxPbC2ZGwVxEdkCnj2qNALGO5f0vE0W"
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchInput + "&facet_fields=source&facet=true&begin_date=" + startYear + "0101&end_date=" + endYear + "1231&api-key=" + apiKey;

    console.log(searchInput);
    console.log(numRecords);
    console.log(startYear);
    console.log(endYear);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < numRecords; i++) {
            console.log(response);
            var title = response.response.docs[i].headline.main;
            console.log(title);
            var author = response.response.docs[i].byline.original;
            console.log(author);

            author = author || "Author Unknown";

            var titleResult = $("<p>").append(i + 1, ". ", title);
            $("#results").append(titleResult);
            titleResult.addClass("titleName");
            var authorResult = $("<p>").append(author);
            $("#results").append(authorResult);
            authorResult.addClass("authorName");
        };
    });
});

