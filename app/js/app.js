require([
	"everlive",
	"push",
	"views/list",
	"views/details" ],
	function( el, push, list, details ) {
		"use strict";

		document.addEventListener( "deviceready", function () {  
			navigator.splashscreen.hide();

			var app = new kendo.mobile.Application( document.body, {
				skin: "flat",
				init: function() {
					kendo.UserEvents.defaultThreshold( 20 );
				}
			});
		});
	}
);