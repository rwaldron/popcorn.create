//	Requires Popcorn.js
(function( global, Popcorn ) {

	var doc = global.document;

	Popcorn.create = function( options ) {
		return new Popcorn.create.init( options );
	};

	Popcorn.create.init = function( options ) {

		var media, guid, pop;

		// Create new video element
		// TODO: modify to accept either audio or video
		media = doc.createElement( options.type || "video" );
		guid = Popcorn.guid( "__popcorn" );


		options.id = options.id || guid;

		Popcorn.extend( media, options );

		media.style.display = "none";

		doc.body.appendChild( media );

		pop = Popcorn( "#" + options.id );
		// If a placeholder was specified,
		// immediately append new media
		if ( options.placeholder ) {
			pop.appendTo(
				( options.placeholder[0] !== "#" ? "#" : "" ) +
				options.placeholder
			);
		}

		return pop;
	};

	//	Popcorn.create() returns a popcorn object

	Popcorn.extend( Popcorn.p, {
		appendTo: function( parent ) {

			var matches = doc.querySelectorAll( parent ),
					orig = doc.getElementById( this.media.id ),
					clone = this.media.cloneNode( true );

			if ( matches.length ) {

				matches[ 0 ].appendChild( clone );

				this.media = clone;

				this.media.style.display = "";

				orig.parentNode.removeChild( orig );
			}

			// Allow appendTo() to chain
			return this;
		}
	});

})( this, Popcorn );