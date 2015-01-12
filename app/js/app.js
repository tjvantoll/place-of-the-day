require.config({
	paths: {
		"Everlive": "../bower_components/everlive/src/everlive",
		"jquery": "../bower_components/jquery/dist/jquery",
		"jstz": "../bower_components/everlive/src/jstz",
		"kendo": "../bower_components/kendo-ui-core/src/js/kendo.ui.core",
		"kendo.data.everlive": "../bower_components/everlive/src/kendo.data.everlive",
		"reqwest": "../bower_components/everlive/src/reqwest",
		"rsvp": "../bower_components/everlive/src/rsvp",
		"underscore": "../bower_components/everlive/src/underscore"
	},
	shim: {
		"rsvp": {
			exports: "RSVP"
		},
		"underscore": {
			exports: "_"
		}
	}
});

require([
	"jquery",
	"kendo",
	"push",
	"views/list",
	"views/details" ],
	function( push, list, details ) {
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