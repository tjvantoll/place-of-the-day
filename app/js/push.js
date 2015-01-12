define([ "everlive" ], function( el ) {
	"use strict";

	function registerForPush() {
		el.push.register(
			{
				iOS: {
					badge: "true",
					sound: "true",
					alert: "true"
				},
				android: {
					projectNumber: "892866816570"
				},
				notificationCallbackIOS: function( e ) {
					// Handle the push on iOS
				},
				notificationCallbackAndroid: function( e ) {
					// Handle the push for Android
				},
			},
			function( data ) {
				// This function will be called once the device is successfully registered
			},
			function( error ) {
				// This callback will be called any errors occurred during the device
				// registration process
			}
		);
	};

	document.addEventListener( "deviceready", registerForPush );
});