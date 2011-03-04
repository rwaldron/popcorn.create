# popcorn.create.js

Rough Draft; r1

		Popcorn.create({

			src: "assets/snowdriving.ogv",
			controls: true

		}).listen( "loadedmetadata", function() {

			//	`this` is the Popcorn object returned by the video


			this.appendTo( selector );


		});	



TODO: 

	- Comment/Annotate
	
	- More ref tests
	
	- Better DOM manipulation