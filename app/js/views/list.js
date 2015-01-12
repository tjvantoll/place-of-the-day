define(function() {
	"use strict";

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