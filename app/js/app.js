(function () {
	"use strict";

	window.el = new Everlive( "lLGSjm76TzCGSDza" );

	var placesData = new kendo.data.DataSource({
		type: "everlive",
		transport: {
			typeName: "Places"
		},
		sort: { field: "PushDate", dir: "desc" }
	});

	function removeFirstSetofParenthesis( text ) {
		var start,
			end,
			found = 0;

		for ( var i = 0; i < text.length; i++ ) {
			if ( text.charAt( i ) == "(" ) {
				if ( found === 0 ) {
					start = i;
				}
				found++;
			}
			if ( text.charAt( i ) == ")" ) {
				if ( found === 1 ) {
					end = i;
					break;
				}
				found--;
			}
		}

		return text.substring( 0, start ) +
			text.substring( end + 1, text.length );
	};

	function scrapeWikipedia( url ) {
		var promise = $.Deferred();
		$.get( url ).then(function( data ) {
			var parser = new DOMParser(),
				htmlDoc = parser.parseFromString( data, "text/html" ),
				toc = $( htmlDoc.getElementById( "toc" ) ),
				description = "",
				descriptionParagraphs = toc.prevAll( "p" );

			descriptionParagraphs.find( ".reference, .metadata" ).remove();

			// Remove all links
			descriptionParagraphs.find( "a" ).replaceWith(function() {
				return $( "<span>" ).html( this.innerHTML );
			});

			// prevAll returns paragraphs in reverse order, so reverse again for
			// a correctly formatted description
			$( descriptionParagraphs.get().reverse() ).each(function() {
				description += this.outerHTML;
			});

			description = removeFirstSetofParenthesis( description );

			promise.resolve({ description: description });
		});
		return promise;
	};

	window.detailsView = {
		show: function ( event ) {
			var view = event.view;
			view.element.find( "[data-role='view-title']" ).text( "Loading..." );
			el.data( "Places" ).getById( view.params.id )
				.then(function( data ) {
					var place = data.result,
						template = kendo.template( $( "#place-details-template" ).html() );

					scrapeWikipedia( place.Wikipedia ).then(function( data ) {
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

	document.addEventListener( "deviceready", function () {  
		navigator.splashscreen.hide();

		var app = new kendo.mobile.Application( document.body, {
			skin: "flat",
			init: function() {
				kendo.UserEvents.defaultThreshold( 20 );
			}
		});

		$( "#place-list" ).kendoMobileListView({
			dataSource: placesData,
			template: $( "#place-template" ).html()
		});
	});
}());