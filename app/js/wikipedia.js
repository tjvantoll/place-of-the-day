define([ "jquery" ], function( $ ) {
	"use strict";

	function removeFirstSetofParenthesis( text ) {
		var start,
			end,
			found = 0;

		for ( var i = 0; i < text.length; i++ ) {
			if ( text.charAt( i ) === "(" ) {
				if ( found === 0 ) {
					start = i;
				}
				found++;
			}
			if ( text.charAt( i ) === ")" ) {
				if ( found === 1 ) {
					end = i;
					break;
				}
				found--;
			}
		}

		return text.substring( 0, start ) +
			text.substring( end + 1, text.length );
	}

	return {
		scrape: function( url ) {
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

				// Remove the speaker icon
				if ( description.indexOf( "Speaker_Icon" ) > 0 ) {
					while ( description.indexOf( "Speaker_Icon" ) > 0 ) {
						description = removeFirstSetofParenthesis( description );
					}
				}

				promise.resolve({ description: description });
			});
			return promise;
		}
	};
});