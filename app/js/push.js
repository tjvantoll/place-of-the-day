(function() {
	"use strict";

	function registerForPush() {
		window.el.push.register(
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
					// logic for handling push in iOS
				},
				notificationCallbackAndroid: function( e ) {
					// logic for handling push in Android
				},
			},
			function( data ) {
				// This function will be called once the device is successfully registered
				alert( "success" );
				alert( JSON.stringify( data ) );
			},
			function( error ) {
				// This callback will be called any errors occurred during the device
				// registration process
				alert( "error" );
				alert( JSON.stringify( error ) );
			}
		);
	};

	document.addEventListener( "deviceready", registerForPush );
}());