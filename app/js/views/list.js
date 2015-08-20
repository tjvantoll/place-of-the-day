define([ "jquery", "kendo", "api" ], function( $, kendo ) {
	"use strict";

	var placesData = new kendo.data.DataSource({
		type: "everlive",
		transport: {
			typeName: "Places"
		},
		sort: { field: "PushDate", dir: "desc" }
	});

	window.listView = {
		init: function() {
			$( "#place-list" ).kendoMobileListView({
				dataSource: placesData,
				template: $( "#place-template" ).html()
			});
		}
	};
});
