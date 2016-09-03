//my baseline topics
var topics = ["Halo 5", "Halo HCS", "Huke HCS", "Total War", "Forza"];


//JQ button with for loop creation for array. Use .empty

function forloopbuttons() {
	$(".tagpool").empty();


	for (var i = 0; i < topics.length; i++) {
 		var dyButton = $("<button class = 'newButton'>");
 		dyButton.data("tags", topics[i]).text(topics[i]);
 		$(".tagpool").append(dyButton);
 	}

 	console.log(forloopbuttons);
};

forloopbuttons();

//add string to array

$(".submit").on("click", function() {
	var newTopic = $(".textinput").val().trim();
		if (topics.indexOf(newTopic) === -1 && newTopic != "") {
		topics.push(newTopic);
		forloopbuttons();
	}
	return false;

	console.log(newTopic);
	console.log(forloopbuttons);
});

//click event to pull from giphy api

$(".tagpool").on("click", ".newButton", function() {

	$(".giphypool").remove();

	var userTopic = $(this).data("userTopic");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + userTopic + "&api_key=dc6zaTOxFJmzC&limit=6";
//ajax call
	
	$.ajax({url: queryURL, method: "GET"}).done(function(response) {
		var giphyAPI = response.data;

		console.log(giphyAPI);

		//this was confusing, thank you
			
			var container = $("<div class = 'dump'>");
			var gifRating = $("<p>").text("Rating: " + (giphyAPI[i].rating));

			var gify = $("<img class = 'mygify'>");

			gify.attr("src", giphyAPI[i].images.fixed_height_still.url)
			.attr("data-state", "still")
			.data("still", giphyAPI[i].images.fixed_height_still.url)
			.data("active", giphyAPI[i].images.fixed_height.url);

			container.append(gifRating);
			container.append(gify);

				$(".giphypool").append(container);
			});
});

//this sucked
$(".giphypool").on("click", ".mygify", function() {
	var state = $(this).attr("data-state");

	if (state == "still") {
		$(this).attr("src", $(this).data("active"));
		$(this).attr("data-state", "active");
	} else {
		$(this).attr("src", $(this).data("still"));
		$(this).attr("data-state", "still");
	}
});
	
