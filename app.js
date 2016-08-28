$(function() {
	var $main = $("#main");

	loadPage = function(href) {
		$main.load(href);
	};

	init = function() {
		loadPage("Home.html")
	};
	init();

	$(window).on("popstate", function(e) {
		if (e.originalEvent.state !== null) {
			loadPage(location.href);
		}
	});

	$(document).on("click", "a", function() {
		var href = $(this).attr("href");

		history.pushState({}, '', href);
		loadPage(href);
		return false;
	});

	$('nav ul li a').click(function(){
		$('.active').removeClass('active'); // remove the class from the currently selected
		$(this).addClass('active'); // add the class to the newly clicked link
	});
});



