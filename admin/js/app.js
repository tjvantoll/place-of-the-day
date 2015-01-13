(function() {
	"use strict";

	var el = new Everlive( "lLGSjm76TzCGSDza" ),
		placesData = new kendo.data.DataSource({
			type: "everlive",
			transport: {
				typeName: "Places"
			},
			schema: {
				model: {
					id: "Id",
					fields: {
						Name: {},
						Country: {},
						Latitude: { type: "number" },
						Longitude: { type: "number" },
						Wikipedia: {},
						TripAdvisor: {},
						PushDate: { type: "date" },
					}
				}
			},
			sort: { field: "PushDate", dir: "desc" }
		});

	$( "#place-grid" ).kendoGrid({
		dataSource: placesData,
		editable: "popup",
		columns: [
			{ field: "Name" },
			{ field: "Country" },
			{ field: "Latitude" },
			{ field: "Longitude" },
			{ field: "Wikipedia" },
			{ field: "TripAdvisor" },
			{
				field: "PushDate",
				format: "{0:MM/dd/yyyy}"
			},
			{ command: "edit" },
			{ command: "destroy" }
		],
		sortable: true,
		toolbar: [ "create" ]
	});
}());
