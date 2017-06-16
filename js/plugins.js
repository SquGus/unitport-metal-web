// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
$(function() {
	$(".button-collapse").sideNav();
	$('.parallax').parallax();
	$('.scrollspy').scrollSpy();
	$('ul.tabs').tabs({
		swipeable: true
	});

	var url = document.URL;
	var page = url.split('/')[3];
	var tab = page.slice(0, -5) + "-tab";
	if (tab == "-tab") {
		tab = 'index-tab';
	}

	$("." + tab).addClass("active");
});
