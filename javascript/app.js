var starterButtons = ["planes", "trains", "automobiles"];
function onPage() {
  for (i = 0; i < starterButtons.length; i++) {
    var button = $("<button>");
    button.attr("data-button", starterButtons[i]);
    button.addClass("buttonClick");
    button.text(starterButtons[i]);
    $(".buttons").append(button);
  }
}
onPage();

$(".buttonClick").on("click", function() {
  event.preventDefault();
  $(".gifs");
  var topic = $(this).attr("data-button");
  var URL = "http://api.giphy.com/v1/gifs/search?q=" + topic +"&api_key=6FR6Mj7eSFpkzXrDqTYKbqyroOFJd2mw&limit=5";
  $.ajax({
    url: URL,
    method: "GET"
  }).done(function(gif){
    console.log(gif);
    var items = gif.data;
    for (i = 0; i < items.length; i++) {
      var image = $("<img>");
      image.addClass("imgClick");
      image.attr("src", items[i].images.fixed_height_still.url);
      $(".gifs").prepend(image);
    }
  });
});

$(".imgClick").on("click", function() {
  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
  var state = $(this).attr("data-state");
  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
  // Then, set the image's data-state to animate
  // Else set src to the data-still value
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});
