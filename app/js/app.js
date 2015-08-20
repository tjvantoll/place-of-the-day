require.config({
	paths: {
		"Everlive": "../bower_components/everlive/src/everlive",
		"jquery": "../bower_components/jquery/dist/jquery",
		"jstz": "../bower_components/everlive/src/jstz",
		"kendo": "../kendo/js/kendo.mobile.min",
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
	function( $, kendo ) {
		"use strict";

		document.addEventListener( "deviceready", function() {
			navigator.splashscreen.hide();
			new kendo.mobile.Application( document.body, {
				skin: "nova"
			});
		});
	}
);
