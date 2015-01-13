define([ "api", "../wikipedia" ], function( api, wiki ) {
	"use strict";

	// https://developers.google.com/maps/documentation/staticmaps/
	function buildGoogleMapsUrl( place ) {
		return "https://maps.googleapis.com/maps/api/staticmap?" +
			"center=" + place.Latitude + "," + place.Longitude +
			"&zoom=6" +
			"&size=" + window.innerWidth + "x250" +
			"&scale=2" +
			"&markers=color:red|" + place.Latitude + "," + place.Longitude +
			"&key=AIzaSyCAhsJhH9bL5zUz1C_nDy3RFfEAZZd28x0";
	};

	window.detailsView = {
		show: function ( event ) {
			var view = event.view;
			view.element.find( "[data-role='view-title']" ).text( "Loading..." );
			api.data( "Places" ).getById( view.params.id )
				.then(function( data ) {
					var place = data.result,
						template = kendo.template( $( "#place-details-template" ).html() );
					place.GoogleMapsURL = buildGoogleMapsUrl( place );

					wiki.scrape( place.Wikipedia ).then(function( data ) {
						place.Description = data.description;
						$( "#place" ).html( template( place ) );
						view.element.find( "[data-role='view-title']" ).text( place.Name );
					});
				});
		},
		hide: function() {
			$( "#place" ).empty();
		}
	};
});