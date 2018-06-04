/**
 * Balinese temple animation
 */

 $(document).ready(function() {
 	$('#balinese-temple-left').waypoint(function(direction) {
  		$('#balinese-temple-left').addClass('animated fadeInLeftBig');
	}, { offset: '75%' });

	$('#balinese-temple-right').waypoint(function(direction) {
  		$('#balinese-temple-right').addClass('animated fadeInRightBig');
	}, { offset: '75%' });
 });

/**
 * Paralax background effect
 */
(function($) {
	// Init Skrollr
	var s = skrollr.init({
		render : function(data) {
			//Debugging - Log the current scroll position.
			//console.log(data.curTop);
		},
		mobileCheck : function() {
			//hack - forces mobile version to be off
			return false;
		}
	});

	var toggle = true;
	$('#logo').click(function() {
		if (toggle) {
			$(this).css({
				"-webkit-transform" : "rotate(-90deg)",
				"-moz-transform" : "rotate(-90deg)",
				"transform" : "rotate(-90deg)",
				// "-webkit-transition-property" : "-webkit-transform",
				// "transition-property" : "transform",
				// "-webkit-transition-duration" : "5s"
    // 			"transition-duration" : "5s"
			});
		} else {
			$(this).css({
				"-webkit-transform" : "rotate(0deg)",
				"-moz-transform" : "rotate(0deg)",
				"transform" : "rotate(0deg)",
				// "-webkit-transition-property" : "-webkit-transform",
				// "transition-property" : "transform",
				// "-webkit-transition-duration" : "5s"
    // 			"transition-duration" : "5s"
			});
		}
		toggle = !toggle;
	});

} )(jQuery);