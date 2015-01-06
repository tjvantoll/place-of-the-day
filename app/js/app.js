(function () {
	"use strict";

	var el = new Everlive( "lLGSjm76TzCGSDza" );

	var placesData = new kendo.data.DataSource({
		type: "everlive",
		transport: {
			typeName: "Places"
		},
		sort: { field: "PushDate", dir: "desc" }
	});

	window.detailsView = {
		show: function ( event ) {
			var view = event.view;
			view.element.find( "[data-role='view-title']" ).text( "Loading..." );
			el.data( "Places" ).getById( view.params.id )
				.then(function( data ) {
					var place = data.result,
						template = kendo.template( $( "#place-details-template" ).html() );

					$( "#place" ).html( template( place ) );
					view.element.find( "[data-role='view-title']" ).text( place.Name );
				});
		},
		hide: function() {
			$( "#place" ).empty();
		}
	};

	document.addEventListener( "deviceready", function () {  
		navigator.splashscreen.hide();

		var app = new kendo.mobile.Application( document.body, {
			skin: "flat"
		});

		$( "#place-list" ).kendoMobileListView({
			dataSource: placesData,
			template: $( "#place-template" ).html()
		});
	});
}());