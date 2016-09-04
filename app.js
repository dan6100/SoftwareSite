$(document).ready(function() {
	var $main = $("#main");
			$content = $("#content");
			
			if (window.location.pathname === "/") {
				var address = "/index.html"
			}
			else {
				var address = window.location.pathname
			};
			console.log(window.location.pathname);

	// function for ajax loading
	loadPage = function(href) {
		// ajax load from target page only content from #main
		$main.load(href+' #main > *');

		// reset window to top position
		window.scrollTo(0, 0);

		// in narrow mode if menu is open close it
		$('#nav-trigger').prop('checked', false);
	};

	// function for setting active link on initial page load
	init = function() {
		$('a[href$="' + address.slice(1) + '"]').addClass('active'); 
	};

	// run init function
	init();
	
	
	$(window).on("popstate", function(e) {
		if (e.originalEvent.state !== null) {
			loadPage(location.href);
		}
	});

	// on click nav links
	$(document).on("click", "nav ul li a", function() {


		var href = $(this).attr("href");

		// remove all other active classes
		$('.active').removeClass('active'); 

		// add active class to clicked link
		$(this).addClass('active'); 

		// save to browser history
		history.pushState({}, '', href);

		// ajax load page
		loadPage(href);

		// bypass default link behaviour
		return false;
	});

	// on click footer links
	$(document).on("click", 'div footer a', function(){
		var href = $(this).attr("href");

		$('.active').removeClass('active'); // remove the class from the currently selected

		history.pushState({}, '', href);
		loadPage(href);
		return false;
	});
});



