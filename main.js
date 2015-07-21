// hello if you are reading the comments o7

var omega = (function(){
	"use strict";

	// only two so far. ask me stuff if you want more
	var images = ['/hussie.png', '/hussie1.png', '/balon.png'];

	// ayy lmao?
	var messages = [
		"ayy lmao",
		"nepeta is dead?",
		"welcome to the omegapause",
		"the ride never ends",
		"hello",
		"see u next year",
		"'oh, megapause' or 'omegapause'?",
		"*shoves breadsticks into purse*"
	];

	// random functions, nothing to see here
	function randInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function randomItem(list) {
		// i seriously didn't know to -1 and it was biting me with my phone lockscreen theme
		return list[randInt(0, list.length - 1)];
	}

	function updateImage() {
		$("#lmao").fadeOut(1500, function(){
			$(this).text(randomItem(messages)).fadeIn(1500);
			setTimeout(updateImage, 15000);
		});
	}

	return {
		init: function() {
			// create text skeleton
			$("<p/>").attr("id", "lmao").appendTo("#message");

			// hell breaks loose as the wild hussie warps into the page
			$("<img/>").attr("src", randomItem(images)).attr("id", "hussieimg").appendTo("#hussiediv");

			// update text
			updateImage();
		}
	};
})();
