# popcorn.create.js

Rough Draft; r1

		Popcorn.create({

			src: "assets/snowdriving.ogv",
			controls: true

		}).listen( "loadedmetadata", function() {

			//	`this` is the Popcorn object returned by the video


			this.appendTo( selector );


		});	

		
		// If a `player` property is set, that player will be used 
		// to create the new popcorn object
		
	  Popcorn.create({
      
			// Specify which player to use
			player: "vimeo",

			// args to Popcorn.vimeo()    
			placeholder: "vimeo-fixture", 
			src: "http://vimeo.com/22444635",
			setup: {
				// player settings here
				// TODO: this is currently untested
			}

	  }).listen( "loadedmetadata", function() {

			ok( true, "loadedmetadata fired on vimeo element" );
	    plus();

	    equal( document.getElementById( "vimeo-fixture" ).nodeName, "OBJECT", "#vimeo-fixture was converted into an &lt;object&gt; element" );
	    plus();
	  });
		


TODO: 

- Comment/Annotate

- More ref tests

- Better DOM manipulation