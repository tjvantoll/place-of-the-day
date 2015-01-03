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
						NameOrigin: {},
						Description: {},
						PushDate: { type: "date" }
					}
				}
			},
			sort: { field: "PushDate", dir: "desc" }
		}),
		textareaEditor = function( container, options ) {
			$( "<textarea name='' data-bind='value:" + options.field + "' cols='20' rows='4'>" )
				.appendTo( container );
		};

	$( "#place-grid" ).kendoGrid({
		dataSource: placesData,
		editable: "popup",
		columns: [
			{ field: "Name" },
			{ field: "Country" },
			{
				field: "NameOrigin",
				editor: textareaEditor
			},
			{
				field: "Description",
				editor: textareaEditor
			},
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
