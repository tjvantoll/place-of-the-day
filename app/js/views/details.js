define([ "api", "../wikipedia" ], function( api, wiki ) {
	"use strict";

	window.detailsView = {
		show: function ( event ) {
			var view = event.view;
			view.element.find( "[data-role='view-title']" ).text( "Loading..." );
			api.data( "Places" ).getById( view.params.id )
				.then(function( data ) {
					var place = data.result,
						template = kendo.template( $( "#place-details-template" ).html() );

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