(function () {
	"use strict";

	var el = new Everlive( "lLGSjm76TzCGSDza" );

	var placesData = new kendo.data.DataSource({
		type: "everlive",
		transport: {
			typeName: "Places"
		}
	});

	function loadPictures( place ) {
		console.log( place );

		$.get( "http://www.panoramio.com/map/get_panoramas.php",
			{
				set: "public",
				from: 0,
				to: 5,
				miny: place.Latitude - 5,
				maxy: place.Latitude + 5,
				minx: place.Longitude - 5,
				maxx: place.Longitude + 5,
				size: "medium"
			})
			.then(function( data ) {
				var photos = $( "#photos" );
				data.photos.forEach(function( photo ) {
					photos.append( "<img src='" +
						photo.photo_file_url +
						"'>" );
			})
		});
	}

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

					loadPictures( place );
				});
		},
		hide: function() {
			$( "#place" ).empty();
		}
	};

	document.addEventListener( "deviceready", function () {  
		navigator.splashscreen.hide();

		var app = new kendo.mobile.Application( document.body, {
			skin: "flat",
		});

		$( "#place-list" ).kendoMobileListView({
			dataSource: placesData,
			template: $( "#place-template" ).html()
		});
	});
}());