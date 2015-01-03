(function () {
	"use strict";

	var el = new Everlive( "lLGSjm76TzCGSDza" );

	var placesData = new kendo.data.DataSource({
		type: "everlive",
		transport: {
			typeName: "Places"
		}
	});

	window.detailsShow = function( event ) {
		var view = event.view;
		view.element.find( "[data-role='view-title']" ).text( "Loading..." );
		el.data( "Places" ).getById( view.params.id ).then(function( data ) {
			var place = data.result,
				template = kendo.template( $( "#place-template" ).html() );

			$( "#place" ).html( template( place ) );
			view.element.find( "[data-role='view-title']" ).text( place.Name );
		});
	}

	window.detailsHide = function( event ) {
		$( "#place" ).empty();
	}

	document.addEventListener( "deviceready", function () {  
		navigator.splashscreen.hide();

		var app = new kendo.mobile.Application( document.body, {
			skin: "flat",
		});

		$( "#place-list" ).kendoMobileListView({
			dataSource: placesData,
			template: "<a href='\\#details?id=#: Id #'>#: Name #</a>"
		});
	});
}());