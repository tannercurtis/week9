$(".gallery").masonry({
  itemSelector: ".thumbnail",
  columnWidth: ".thumbnail",
  percentPosition: true
});

// $("data-fancybox").on("click", fancybox({}));

$(".touchevents .thumbnail").hammer().bind("press", function() {
// // Your code here Only for devices with touch events, when the user presses on a thumbnail, 
// show the caption by adding the class "open" to the thumbnail 
// that fired the event.
	$(this).addClass("open");
});

$(".touchevents .thumbnail").hammer().bind("swipe", function() {
// // Your code here: Only for devices with touch events, 
// when the user swipes on a thumbnail, hide the caption by
// removing the class "open" on the thumbnail that fired the event. 
// Optionally, add an animation to the left position to animate the "swipe" effect.
	$(this).removeClass("open");
});
