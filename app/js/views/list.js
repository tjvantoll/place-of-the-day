define([ "api" ], function( api ) {
	"use strict";

	console.log( window.Everlive );

	var placesData = new kendo.data.DataSource({
		type: "everlive",
		transport: {
			typeName: "Places"
		},
		sort: { field: "PushDate", dir: "desc" }
	});

	$( "#place-list" ).kendoMobileListView({
		dataSource: placesData,
		template: $( "#place-template" ).html()
	});
})