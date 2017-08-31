// Initial array of topics //
var topics = ["Clouds", "Rain", "Forest"];

// To display Nature Scenes //
function displayNature() {
	var topic = $(this).attr("data-name");
	var qeryURL = "https://api.giphy.com/v1/gifs/search?api_key=f2838b978f0b44b9bb70bbeff9f8aa05&q=" + topic + "&limit=10&offset=0&rating=G&lang=en";

	// Create AJAX call for button being clicked //
	$.ajax({
		url: qeryURL,
		method: "GET"

	// Function after data from AJAX comes back //
	})
	.done(function(response) {
		console.log(qeryURL);
	// Create div for nature scene //
	var natureDiv = $("<div class='nature'>");

	// // Store the rating data //
	// var rating = response.Rated;

	// // Create element to display rating //
	// var pOne = $("<p>").text("Rating: " + rating);

	// // Display the rating
	// natureDiv.append(pOne);

	// To save the imageUrl //
	var imageUrl = response.data.image_original_url;

	// Create element to display image //
	var natureImage = $("<img>");

	// Setting the src attribute to the image //
	natureImage.attr("src", imageUrl);
	natureImage.attr("alt", "nature image");

	// Append nature image  //
	$("#images").append(natureImage);

	});
}

	// Function to display nature buttons //
	function renderButtons() {
		// Delete previous button //
		$("#buttons-view").empty();

		// For loop to go through the array //
		for (var i = 0; i < topics.length; i++) {
			// To dynamically generate buttons //
			var a = $("<button>");
			
			// Add class to button //
			a.addClass("topic");

			// Add data attribute //
			a.attr("data-name", topics[i]);

			// Providing the initial button text //
			a.text(topics[i]);

			// Adding button to buttons-view div //
			$("#buttons-view").append(a);
		}
	}

	// Function to handle events when a button is cliked //
	$("#addNature").on("click", function(event) {
		event.preventDefault();

		// To grab input from textbox //
		var topic = $("#nature-input").val().trim();

		// Add new topics into the array //
		topics.push(topic);

		// Call renderButton function //
		renderButtons();
	});

	// Add click event listener to all elements with class nature //
	$(document).on("click", ".nature", displayNature);

	// Call renderButtons function to display initial buttons //
	renderButtons();
