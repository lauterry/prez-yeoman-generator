$( document ).ready(function() {
	new Ruban({
		"pagination": true,
		"ratio": 1.3333333333333333,
		"minPadding": "1em",
		"transitionDuration": "0.8s",
		"stripHtmlInToc": false,
		"bindClicks": false,
		"bindMouseWheel": false
	});

	$('.animate').on({
		active : function () {
			$(this).find('.slide-to-right').stop().animate({
				marginLeft : '2em'
			}, 1000);
		}
	})
});